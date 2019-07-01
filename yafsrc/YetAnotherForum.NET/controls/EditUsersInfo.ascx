﻿<%@ Control Language="C#" AutoEventWireup="true" Inherits="YAF.Controls.EditUsersInfo"
    CodeBehind="EditUsersInfo.ascx.cs" %>



<h2>
            <YAF:LocalizedLabel ID="LocalizedLabel1" runat="server" LocalizedTag="HEAD_USER_DETAILS" LocalizedPage="ADMIN_EDITUSER" />
        </h2>
    <hr />

        <h4>
            <YAF:HelpLabel ID="HelpLabel1" runat="server" LocalizedTag="USERINFO_NAME" LocalizedPage="ADMIN_EDITUSER" />
        </h4>
        <p>
            <asp:TextBox CssClass="form-control" ID="Name" runat="server" Enabled="false" />
        </p>
    <hr />

        <h4>
            <YAF:HelpLabel ID="HelpLabel2" runat="server" LocalizedTag="USERINFO_DISPLAYNAME" LocalizedPage="ADMIN_EDITUSER" />
        </h4>
        <p>
            <asp:TextBox CssClass="form-control" ID="DisplayName" runat="server" />
        </p>
    <hr />

        <h4>
            <YAF:HelpLabel ID="HelpLabel3" runat="server" LocalizedTag="EMAIL" LocalizedPage="PROFILE" />
        </h4>
        <p>
            <asp:TextBox CssClass="form-control" ID="Email" runat="server" TextMode="Email" />
        </p>
    <hr />

        <h4>
            <YAF:HelpLabel ID="HelpLabel4" runat="server" LocalizedTag="RANK" LocalizedPage="ADMIN_USERS" />
        </h4>
        <p>
            <asp:DropDownList ID="RankID" runat="server" CssClass="custom-select" />
        </p>
    <hr />


    <asp:PlaceHolder runat="server" id="IsHostAdminRow">
        <h4>
            <YAF:HelpLabel ID="HelpLabel5" runat="server" LocalizedTag="USERINFO_HOST" LocalizedPage="ADMIN_EDITUSER" />
        </h4>
        <div class="custom-control custom-switch">
            <asp:CheckBox Text="&nbsp;" runat="server" ID="IsHostAdminX" />
        </div>
    <hr />
    </asp:PlaceHolder>
    <asp:PlaceHolder runat="server" id="IsCaptchaExcludedRow">
        <h4>
            <YAF:HelpLabel ID="HelpLabel6" runat="server" LocalizedTag="USERINFO_EX_CAPTCHA" LocalizedPage="ADMIN_EDITUSER" />
        </h4>
        <div class="custom-control custom-switch">
            <asp:CheckBox Text="&nbsp;" runat="server" ID="IsCaptchaExcluded" />
        </div>
    <hr />
            </asp:PlaceHolder>
    <asp:PlaceHolder runat="server" id="IsExcludedFromActiveUsersRow">
        <h4>
            <YAF:HelpLabel ID="HelpLabel7" runat="server" LocalizedTag="USERINFO_EX_ACTIVE" LocalizedPage="ADMIN_EDITUSER" />
        </h4>
        <div class="custom-control custom-switch">
            <asp:CheckBox Text="&nbsp;" runat="server" ID="IsExcludedFromActiveUsers" />
        </div>
    <hr />
    </asp:PlaceHolder>
        <h4>
            <YAF:HelpLabel ID="HelpLabel8" runat="server" LocalizedTag="USERINFO_APPROVED" LocalizedPage="ADMIN_EDITUSER" />
        </h4>
        <div class="custom-control custom-switch">
            <asp:CheckBox Text="&nbsp;" runat="server" ID="IsApproved" />
        </div>
    <hr />
    <!-- Easy to enable it if there is major issues (i.e. Guest being deleted). -->
    <asp:PlaceHolder runat="server" id="IsGuestRow" visible="false">
        <h4>
            <YAF:HelpLabel ID="HelpLabel9" runat="server" LocalizedTag="USERINFO_GUEST" LocalizedPage="ADMIN_EDITUSER" />
        </h4>
        <div class="custom-control custom-switch">
            <asp:CheckBox Text="&nbsp;" runat="server" ID="IsGuestX" />
        </div>
    <hr />
    </asp:PlaceHolder>
        <h4>
            <YAF:HelpLabel ID="HelpLabel10" runat="server" LocalizedTag="JOINED" LocalizedPage="PROFILE" />

        </h4>
        <p>
            <asp:TextBox CssClass="form-control" ID="Joined" runat="server" Enabled="False" />
        </p>
    <hr />

        <h4>
            <YAF:HelpLabel ID="HelpLabel11" runat="server" LocalizedTag="LASTVISIT" LocalizedPage="PROFILE" />
        </h4>
        <p>
            <asp:TextBox CssClass="form-control" ID="LastVisit" runat="server" Enabled="False" />
        </p>
    <hr />

        <h4>
            <YAF:HelpLabel ID="HelpLabel12" runat="server" LocalizedTag="FACEBOOK_USER" LocalizedPage="ADMIN_EDITUSER" />
        </h4>
        <div class="custom-control custom-switch">
            <asp:CheckBox Text="&nbsp;" runat="server" ID="IsFacebookUser" Enabled="false" />
        </div>
    <hr />

        <h4>
            <YAF:HelpLabel ID="HelpLabel13" runat="server" LocalizedTag="TWITTER_USER" LocalizedPage="ADMIN_EDITUSER" />
        </h4>
        <div class="custom-control custom-switch">
            <asp:CheckBox Text="&nbsp;" runat="server" ID="IsTwitterUser" Enabled="false" />
        </div>
    <hr />

        <h4>
            <YAF:HelpLabel ID="HelpLabel14" runat="server" LocalizedTag="Google_USER" LocalizedPage="ADMIN_EDITUSER" />
        </h4>
        <div class="custom-control custom-switch">
            <asp:CheckBox Text="&nbsp;" runat="server" ID="IsGoogleUser" Enabled="false" />
        </div>


                <div class="text-lg-center">

            <YAF:ThemeButton ID="Save" runat="server" 
                             Type="Primary"
                             Icon="save" 
                             TextLocalizedTag="SAVE"
                             OnClick="Save_Click" />
            </div>
