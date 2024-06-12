/* Yet Another Forum.NET
 * Copyright (C) 2003-2005 Bjørnar Henden
 * Copyright (C) 2006-2013 Jaben Cargman
 * Copyright (C) 2014-2024 Ingo Herbote
 * https://www.yetanotherforum.net/
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at

 * https://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

using System;
using System.IO;

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using OEmbed.Core.Extensions;

using UAParser.Extensions;

using YAF.Core.Hubs;
using YAF.Types.Objects;

namespace YAF.Core.Extensions;

/// <summary>
///     The Service Collection extensions.
/// </summary>
public static class ServiceCollectionExtensionsExtensions
{
    /// <summary>
    /// Adds YAF.NET core service extensions.
    /// </summary>
    /// <param name="services">The services.</param>
    /// <returns>IServiceCollection.</returns>
    public static IServiceCollection AddYafExtensions(this IServiceCollection services)
    {
        services.AddMemoryCache();

        services.AddUserAgentParser();
        services.AddOEmbed();

        services.AddSession(options =>
        {
            options.IdleTimeout = TimeSpan.FromHours(4);
            options.Cookie.Name = ".YAFNET.Session";
            options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
            options.Cookie.SameSite = SameSiteMode.Strict;
            options.Cookie.HttpOnly = true;
        });

        services.AddHttpContextAccessor();

        services.AddOutputCache();

        return services;
    }

    /// <summary>
    /// Adds YAF.NET core service Identity Options.
    /// </summary>
    /// <param name="services">The services.</param>
    /// <returns>IServiceCollection.</returns>
    public static IServiceCollection AddYafIdentityOptions(this IServiceCollection services)
    {
        services.Configure<IdentityOptions>(
            options =>
            {
                // Password settings.
                options.Password.RequireDigit = BoardContext.Current.BoardSettings.PasswordRequireDigit;
                options.Password.RequireLowercase = BoardContext.Current.BoardSettings.PasswordRequireLowercase;
                options.Password.RequireNonAlphanumeric =
                    BoardContext.Current.BoardSettings.PasswordRequireNonLetterOrDigit;
                options.Password.RequireUppercase = BoardContext.Current.BoardSettings.PasswordRequireUppercase;
                options.Password.RequiredLength = BoardContext.Current.BoardSettings.MinRequiredPasswordLength;

                // Lockout settings.
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.AllowedForNewUsers = true;

                // User settings.
                options.User.AllowedUserNameCharacters =
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
                options.User.RequireUniqueEmail = true;
            });

        services.AddDefaultIdentity<AspNetUsers>(o => o.SignIn.RequireConfirmedAccount = true)
            .AddUserManager<AspNetUserManager<AspNetUsers>>().AddRoles<AspNetRoles>().AddDefaultTokenProviders();

        return services;
    }

    /// <summary>
    ///  Adds YAF.NET core services to the specified services collection.
    /// </summary>
    /// <param name="services">The services.</param>
    /// <param name="configuration"></param>
    /// <param name="environment"></param>
    /// <returns>IServiceCollection.</returns>
    public static IServiceCollection AddYafCore(this IServiceCollection services, IConfiguration configuration,
        IWebHostEnvironment environment)
    {
        services.AddControllers();

        services.AddSignalR();

        services.AddYafExtensions();

        services.AddYafIdentityOptions();

        services.AddYafAuthentication(configuration);

        services.AddYafInstallLanguages();

        // Mail Configuration
        services.Configure<MailConfiguration>(configuration.GetSection("MailConfiguration"));

        // Board Configuration
        services.Configure<BoardConfiguration>(configuration.GetSection("BoardConfiguration"));

        services.ConfigureDataProtection(environment);

        services.AddSingleton<IActionContextAccessor, ActionContextAccessor>().AddScoped(
            x => x.GetRequiredService<IUrlHelperFactory>()
                .GetUrlHelper(x.GetRequiredService<IActionContextAccessor>().ActionContext));

        services.AddSingleton<IUserIdProvider, NameUserIdProvider>();

        services.AddOptions();

        return services;
    }

    /// <summary>
    /// Adds the yaf Authentication.
    /// </summary>
    /// <param name="services">The services.</param>
    /// <param name="configuration"></param>
    /// <returns>IServiceCollection.</returns>
    public static IServiceCollection AddYafAuthentication(this IServiceCollection services,
        IConfiguration configuration)
    {
        var boardConfig = configuration.GetSection("BoardConfiguration").Get<BoardConfiguration>();

        var authenticationBuilder = services.AddAuthentication();

        authenticationBuilder.AddCookie(
            options =>
            {
                options.Cookie.Expiration = TimeSpan.FromDays(7);
                options.ExpireTimeSpan = TimeSpan.FromDays(7);
                options.LoginPath = "/Account/Login";
                options.LogoutPath = "/Account/Logout";
                options.AccessDeniedPath = "/Info";
                options.SlidingExpiration = true;
            });

        if (boardConfig.GoogleClientSecret.IsSet() && boardConfig.GoogleClientID.IsSet())
        {
            authenticationBuilder.AddGoogle(
                AuthService.google.ToString(),
                options =>
                {
                    options.ClientId = boardConfig.GoogleClientID;
                    options.ClientSecret = boardConfig.GoogleClientSecret;
                    options.SignInScheme = IdentityConstants.ExternalScheme;

                    options.ClaimActions.MapJsonKey("urn:google:email", "email", "string");
                    options.ClaimActions.MapJsonKey("urn:google:id", "id", "string");
                    options.ClaimActions.MapJsonKey("urn:google:name", "name", "string");
                });
        }

        if (boardConfig.FacebookSecretKey.IsSet() && boardConfig.FacebookAPIKey.IsSet())
        {
            authenticationBuilder.AddFacebook(
                AuthService.facebook.ToString(),
                options =>
                {
                    options.ClientId = boardConfig.FacebookAPIKey;
                    options.ClientSecret = boardConfig.FacebookSecretKey;
                    options.SignInScheme = IdentityConstants.ExternalScheme;

                    options.Scope.Add("email");

                    options.Fields.Add("name");
                    options.Fields.Add("email");

                    options.ClaimActions.MapJsonKey("urn:facebook:email", "email", "string");
                    options.ClaimActions.MapJsonKey("urn:facebook:id", "id", "string");
                    options.ClaimActions.MapJsonKey("urn:facebook:name", "name", "string");
                });
        }


        return services;
    }

    /// <summary>
    /// Adds the yaf install languages.
    /// </summary>
    /// <param name="services">The services.</param>
    /// <returns>IServiceCollection.</returns>
    public static IServiceCollection AddYafInstallLanguages(this IServiceCollection services)
    {
        services.Configure<RequestLocalizationOptions>(options =>
        {
            var supportedCultures = new[] {
                new CultureInfo("ar"),
                new CultureInfo("zh-CN"),
                new CultureInfo("zh-TW"),
                new CultureInfo("cs"),
                new CultureInfo("da"),
                new CultureInfo("nl"),
                new CultureInfo("en-US"),
                new CultureInfo("et"),
                new CultureInfo("fi"),
                new CultureInfo("fr"),
                new CultureInfo("de-DE"),
                new CultureInfo("he"),
                new CultureInfo("it"),
                new CultureInfo("lt"),
                new CultureInfo("no"),
                new CultureInfo("fa"),
                new CultureInfo("pl"),
                new CultureInfo("pt"),
                new CultureInfo("ro"),
                new CultureInfo("ru"),
                new CultureInfo("sk"),
                new CultureInfo("es"),
                new CultureInfo("sv"),
                new CultureInfo("tr"),
                new CultureInfo("vi")
            };

            options.DefaultRequestCulture = new RequestCulture("en-US");
            options.SupportedCultures = supportedCultures;
            options.SupportedUICultures = supportedCultures;
        });


        return services;
    }

    /// <summary>
    /// Configures the data protection.
    /// </summary>
    /// <param name="services">The services.</param>
    /// <param name="environment">The environment.</param>
    /// <returns>Microsoft.Extensions.DependencyInjection.IServiceCollection.</returns>
    public static IServiceCollection ConfigureDataProtection(this IServiceCollection services,
            IWebHostEnvironment environment)
    {
        const string keysDirectoryName = "Keys";
        var keysDirectoryPath = Path.Combine(environment.ContentRootPath, keysDirectoryName);

        if (!Directory.Exists(keysDirectoryPath))
        {
            Directory.CreateDirectory(keysDirectoryPath);
        }

        services.AddDataProtection()
            .PersistKeysToFileSystem(new DirectoryInfo(keysDirectoryPath))
            .SetApplicationName("YAF.NET");

        return services;
    }
}