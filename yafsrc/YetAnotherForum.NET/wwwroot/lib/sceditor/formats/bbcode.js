/* SCEditor for YAF.NET v4.0.0-rc.2 | (C) 2024, Sam Clarke | sceditor.com/license */
!function(t){"use strict";var l,f=t.escapeEntities,r=t.escapeUriScheme,h=t.dom,e=t.utils,p=h.css,s=h.attr,g=h.is,n=e.extend,b=e.each,i=t.command.get,v={always:1,never:2,auto:3},a={bold:{txtExec:["[b]","[/b]"]},italic:{txtExec:["[i]","[/i]"]},underline:{txtExec:["[u]","[/u]"]},strike:{txtExec:["[s]","[/s]"]},mark:{txtExec:["[h]","[/h]"]},left:{txtExec:["[left]","[/left]"]},center:{txtExec:["[center]","[/center]"]},right:{txtExec:["[right]","[/right]"]},justify:{txtExec:["[justify]","[/justify]"]},font:{txtExec:function(t){var e=this;i("font")._dropDown(e,t,function(t){e.insertText(`[font=${t}]`,"[/font]")})}},size:{txtExec:function(t){var e=this;i("size")._dropDown(e,t,function(t){e.insertText(`[size=${t}]`,"[/size]")})}},color:{txtExec:function(t){var e=this;i("color")._dropDown(e,t,function(t){e.insertText(`[color=${t}]`,"[/color]")})}},bulletlist:{txtExec:function(t,e){this.insertText(`[ul]
[li]${e.split(/\r?\n/).join("[/li]\n[li]")}[/li]
[/ul]`)}},orderedlist:{txtExec:function(t,e){this.insertText(`[ol]
[li]${e.split(/\r?\n/).join("[/li]\n[li]")}[/li]
[/ol]`)}},table:{txtExec:["[table][tr][td]","[/td][/tr][/table]"]},code:{txtExec:function(t){var e=this;i("code")._dropDown(e,t,function(t){e.insertText(`[code=${t}]`,"[/code]")})}},extensions:{txtExec:function(t){var e=this;i("extensions")._dropDown(e,t,function(t){e.insertText(`[${t}]`,`[/${t}]`)})}},image:{txtExec:function(t,n){var r=this;i("image")._dropDown(r,t,function(t,e){e||n?r.insertText(`[img=${t}]${e||n||t}[/img]`):r.insertText(`[img]${t}[/img]`)})}},email:{txtExec:function(t,n){var r=this;i("email")._dropDown(r,t,function(t,e){r.insertText(`[email=${t}]${e||n||t}[/email]`)})}},link:{txtExec:function(t,n){var r=this;i("link")._dropDown(r,t,function(t,e){n||e?r.insertText(`[url=${t}]${e||n||t}[/url]`):r.insertText(`[url]${t}[/url]`)})}},quote:{txtExec:["[quote]","[/quote]"]},userlink:{txtExec:["[userlink]","[/userlink]"]},albums:{txtExec:function(t){var e=this;i("albums")._dropDown(e,t,function(t){e.insertText(`[albumid]${t}[/albumid]`)})}},attachments:{txtExec:function(t){var e=this;i("attachments")._dropDown(e,t,function(t){e.insertText(`[attach]${t}[/attach]`)})}},media:{txtExec:function(t){var e=this;i("media")._dropDown(e,t,function(t){e.insertText(`[media]${t}[/media]`)})}},vimeo:{txtExec:function(t){var e=this;i("vimeo")._dropDown(e,t,function(t){e.insertText(`[vimeo]${t}[/vimeo]`)})}},instagram:{txtExec:function(t){var e=this;i("instagram")._dropDown(e,t,function(t){e.insertText(`[instagram]${t}[/instagram]`)})}},facebook:{txtExec:function(t){var e=this;i("facebook")._dropDown(e,t,function(t){e.insertText(`[facebook]${t}[/facebook]`)})}},youtube:{txtExec:function(t){var e=this;i("youtube")._dropDown(e,t,function(t){e.insertText(`[youtube]${t}[/youtube]`)})}}},y={b:{tags:{b:null,strong:null},styles:{"font-weight":["bold","bolder","401","700","800","900"]},format:"[b]{0}[/b]",html:"<strong>{0}</strong>"},i:{tags:{i:null,em:null},styles:{"font-style":["italic","oblique"]},format:"[i]{0}[/i]",html:"<em>{0}</em>"},u:{tags:{u:null},styles:{"text-decoration":["underline"]},format:"[u]{0}[/u]",html:"<u>{0}</u>"},s:{tags:{s:null,strike:null},styles:{"text-decoration":["line-through"]},format:"[s]{0}[/s]",html:"<s>{0}</s>"},sub:{tags:{sub:null},format:"[sub]{0}[/sub]",html:"<sub>{0}</sub>"},sup:{tags:{sup:null},format:"[sup]{0}[/sup]",html:"<sup>{0}</sup>"},h:{tags:{h:null,mark:null},format:"[h]{0}[/h]",html:"<mark>{0}</mark>"},font:{tags:{font:{face:null}},styles:{"font-family":null},quoteType:v.never,format:function(t,e){var n;return`[font=${o(n=g(t,"font")&&(n=s(t,"face"))?n:p(t,"font-family"))}]${e}[/font]`},html:'<font face="{defaultattr}">{0}</font>'},size:{tags:{font:{size:null}},styles:{"font-size":null},format:function(t,e){var n=s(t,"size"),r=2;return-1<(n=n||p(t,"fontSize")).indexOf("px")?((n=+n.replace("px",""))<12&&(r=1),15<n&&(r=3),17<n&&(r=4),23<n&&(r=5),31<n&&(r=6),47<n&&(r=7)):r=n,`[size=${r}]${e}[/size]`},html:'<font size="{defaultattr}">{!0}</font>'},color:{tags:{font:{color:null}},styles:{color:null},quoteType:v.never,format:function(t,e){var n;return`[color=${d(n=g(t,"font")&&(n=s(t,"color"))?n:t.style.color||p(t,"color"))}]${e}[/color]`},html:function(t,e,n){return`<font color="${f(d(e.defaultattr),!0)}">${n}</font>`}},ul:{tags:{ul:null},breakStart:!0,isInline:!1,skipLastLineBreak:!0,format:"[ul]{0}[/ul]",html:"<ul>{0}</ul>"},list:{breakStart:!0,isInline:!1,skipLastLineBreak:!0,html:"<ul>{0}</ul>"},ol:{tags:{ol:null},breakStart:!0,isInline:!1,skipLastLineBreak:!0,format:"[ol]{0}[/ol]",html:"<ol>{0}</ol>"},li:{tags:{li:null},isInline:!1,closedBy:["/ul","/ol","/list","*","li"],format:"[li]{0}[/li]",html:"<li>{0}</li>"},"*":{isInline:!1,closedBy:["/ul","/ol","/list","*","li"],html:"<li>{0}</li>"},table:{tags:{table:null},isInline:!1,isHtmlInline:!0,skipLastLineBreak:!0,format:"[table]{0}[/table]",html:'<table class="table">{0}</table>'},tr:{tags:{tr:null},isInline:!1,skipLastLineBreak:!0,format:"[tr]{0}[/tr]",html:"<tr>{0}</tr>"},th:{tags:{th:null},allowsEmpty:!0,isInline:!1,format:"[th]{0}[/th]",html:"<th>{0}</th>"},td:{tags:{td:null},allowsEmpty:!0,isInline:!1,format:"[td]{0}[/td]",html:'<td class="border>{0}</td>'},hr:{tags:{hr:null},allowsEmpty:!0,isSelfClosing:!0,isInline:!1,format:"[hr]{0}",html:"<hr />"},img:{allowsEmpty:!0,tags:{img:{src:null,class:"img-user-posted img-thumbnail"}},allowedChildren:["#"],quoteType:v.never,format:function(t){var e=s(t,"alt");return e?`[img=${s(t,"src")}]${e}[/img]`:`[img]${s(t,"src")}[/img]`},html:function(t,e,n){return e.defaultattr=f(e.defaultattr,!0)||n,`<img src="${r(e.defaultattr)}" alt="${n}" class="img-user-posted img-thumbnail" />`}},userlink:{allowsEmpty:!0,tags:{span:{class:"badge rounded-pill text-bg-secondary fs-6"}},format:function(t){return`[userlink]${s(t,"data-user")}[/userlink]`},html:function(t,e,n){return`<span class="badge rounded-pill text-bg-secondary fs-6" data-user="${f(n)}">${f(n)}</span>`}},albumimg:{allowsEmpty:!0,tags:{div:{src:null,class:"card text-bg-dark"}},allowedChildren:["#"],quoteType:v.never,format:function(t){return`[albumimg]${s(t,"alt")}[/albumimg]`},html:function(t,e,n){return e.defaultattr=f(e.defaultattr,!0)||n,`<div class="card text-bg-dark" style="max-width:200px" alt="${n}"><img src="${l.albumsPreviewUrl}${r(e.defaultattr)}" class="img-user-posted card-img-top" style="max-height:200px;max-width:200px;object-fit:contain""></div>`}},url:{allowsEmpty:!0,tags:{a:{href:null}},quoteType:v.never,format:function(t,e){return"mailto:"===(t=s(t,"href")).substr(0,7)?`[email="${t.substr(7)}"]${e}[/email]`:`[url=${t}]${e}[/url]`},html:function(t,e,n){return e.defaultattr=f(e.defaultattr,!0)||n,`<a href="${r(e.defaultattr)}" class="link">${n}</a>`}},email:{quoteType:v.never,html:function(t,e,n){return`<a href="mailto:${f(e.defaultattr,!0)||n}">${n}</a>`}},quote:{tags:{div:{class:"border rounded mx-3 mb-3 p-3 border-secondary shadow-sm"}},isInline:!1,quoteType:v.never,format:function(t,e){var n,r="",i=t.children;for(let t=0;!n&&t<i.length;t++)g(i[t],"cite")&&(n=i[t]);return n&&(r=n&&n.textContent,n&&t.removeChild(n),e=this.elementToBbcode(t),r="="+r.replace(/(^\s+|\s+$)/g,""),n)&&t.insertBefore(n,t.firstChild),`[quote${r}]${e}[/quote]`},html:function(t,e,n){return`<div class="border rounded mx-3 mb-3 p-3 border-secondary shadow-sm"><span contenteditable="false"><i class="fa fa-quote-left text-primary fs-4 me-2"></i></span>${n=e.defaultattr?n+'<cite class="card-text text-end d-block text-body-secondary small">'+f(e.defaultattr)+"</cite>":n}</div>`}},code:{tags:{code:{class:null}},isInline:!1,allowedChildren:["#","#newline"],format:function(t,e){var n;return`[code=${(n=g(t,"code")&&(n=s(t,"class"))?n:t.className.replace("language-","")).replace("language-","")}]${e}[/code]`},html:'<pre class="border border-danger rounded m-2 p-2"><code class="language-{defaultattr}">{0}</code></pre>'},left:{styles:{"text-align":["left","-webkit-left","-moz-left","-khtml-left"]},isInline:!1,allowsEmpty:!0,format:"[left]{0}[/left]",html:'<div align="left">{0}</div>'},center:{styles:{"text-align":["center","-webkit-center","-moz-center","-khtml-center"]},isInline:!1,allowsEmpty:!0,format:"[center]{0}[/center]",html:'<div align="center">{0}</div>'},right:{styles:{"text-align":["right","-webkit-right","-moz-right","-khtml-right"]},isInline:!1,allowsEmpty:!0,format:"[right]{0}[/right]",html:'<div align="right">{0}</div>'},justify:{styles:{"text-align":["justify","-webkit-justify","-moz-justify","-khtml-justify"]},isInline:!1,allowsEmpty:!0,format:"[justify]{0}[/justify]",html:'<div align="justify">{0}</div>'},facebook:{allowsEmpty:!0,tags:{div:{"data-facebook-url":null}},format:function(t,e){return(t=s(t,"data-facebook-url"))?`[facebook]${t}[/facebook]`:e},html:function(t,e,n){return`<div class="ratio ratio-1x1" data-oembed-url="${n}" data-facebook-url="${n}"><iframe src="https://www.facebook.com/plugins/post.php?href=${n}"></iframe></div>`}},instagram:{allowsEmpty:!0,tags:{div:{"data-instagram-url":null}},format:function(t,e){return(t=s(t,"data-instagram-url"))?`[instagram]${t}[/instagram]`:e},html:function(t,e,n){var r;return`<div class="ratio ratio-1x1" data-oembed-url="https://www.instagram.com/p/${r=n.match(/\/(p|tv|reel)\/(.*?)\//)[2]}" data-instagram-url="${n}"><iframe src="https://www.instagram.com/p/${r}/embed/captioned/"></iframe></div>`}},vimeo:{allowsEmpty:!0,tags:{div:{"data-vimeo-url":null}},format:function(t,e){return(t=s(t,"data-vimeo-url"))?`[vimeo]${t}[/vimeo]`:e},html:function(t,e,n){var r=n.match(/vimeo\..*\/(\d+)(?:$|\/)/)[1];return`<div data-oembed-url="https://vimeo.com/${r}" data-vimeo-url="${n}" class="ratio ratio-16x9 border"><iframe src="https://player.vimeo.com/video/${r}?show_title=1&show_byline=1&show_portrait=1&fullscreen=1"></iframe></div>`}},youtube:{allowsEmpty:!0,tags:{div:{"data-youtube-url":null}},format:function(t,e){return(t=s(t,"data-youtube-url"))?`[youtube]${t}[/youtube]`:e},html:function(t,e,n){var r=n;return`<div data-oembed-url="https://youtube.com/embed/${n=n.match(/(?:v=|v\/|embed\/|youtu.be\/)?([a-zA-Z0-9_-]{11})/)[1]}" data-youtube-url="${r}" class="ratio ratio-16x9 border"><iframe src="https://youtube.com/embed/${n}?hd=1"></iframe></div>`}},rtl:{styles:{direction:["rtl"]},isInline:!1,format:"[rtl]{0}[/rtl]",html:'<div style="direction: rtl">{0}</div>'},ltr:{styles:{direction:["ltr"]},isInline:!1,format:"[ltr]{0}[/ltr]",html:'<div style="direction: ltr">{0}</div>'},ignore:{}};function x(t,r){return t.replace(/\{([^}]+)\}/g,function(t,e){var n=!0;return"!"===e.charAt(0)&&(n=!1,e=e.substring(1)),"0"===e&&(n=!1),void 0===r[e]?t:n?f(r[e],!0):r[e]})}function k(t){return"function"==typeof t}function o(t){return t&&t.replace(/\\(.)/g,"$1").replace(/^(["'])(.*?)\1$/,"$2")}var $="open",w="content",E="newline",B="close";function u(t,e,n,r,i,l){var a=this;a.type=t,a.name=e,a.val=n,a.attrs=r||{},a.children=i||[],a.closing=l||null}function T(t){var h=this;function a(t,e){var n,r,i;return t===$&&(n=e.match(/\[([^\]\s=]+)(?:([^\]]+))?\]/))&&(i=l(n[1]),n[2])&&(n[2]=n[2].trim())&&(r=function(t){var e,n=/([^\s=]+)=(?:(?:(["'])((?:\\\2|[^\2])*?)\2)|((?:.(?!\s\S+=))*.))/g,r={};if("="===t.charAt(0)&&t.indexOf("=",1)<0)r.defaultattr=o(t.substr(1));else for("="===t.charAt(0)&&(t="defaultattr"+t);e=n.exec(t);)r[l(e[1])]=o(e[3])||e[4];return r}(n[2])),t===B&&(n=e.match(/\[\/([^\[\]]+)\]/))&&(i=l(n[1])),(i=t===E?"#newline":i)&&(t!==$&&t!==B||y[i])||(t=w,i="#"),new u(t,i,e,r)}function d(t,e,n){for(var r=n.length;r--;)if(n[r].type===e&&n[r].name===t)return 1}function m(t,e){return t=(t?y[t.name]:{}).allowedChildren,!h.opts.fixInvalidChildren||!t||-1<t.indexOf(e.name||"#")}function c(t,e){for(var n,r,i,l,a,o,s="",u=function(t){return!1!==(!t||(void 0!==t.isHtmlInline?t.isHtmlInline:t.isInline))};0<t.length;)if(n=t.shift()){if(n.type===$)o=n.children[n.children.length-1]||{},r=y[n.name],l=e&&u(r),i=c(n.children,!1),o=r&&r.html?(u(r)||!u(y[o.name])||r.isPreFormatted||r.skipLastLineBreak,k(r.html)?r.html.call(h,n,n.attrs,i):(n.attrs[0]=i,x(r.html,n.attrs))):n.val+i+(n.closing?n.closing.val:"");else{if(n.type===E){if(!e)continue;a||(s+="<div>"),s+="<br />",t.length||(s+="<br />"),s+="</div>\n",a=!1;continue}l=e,o=f(n.val,!0)}l&&!a?(s+="<div>",a=!0):!l&&a&&(s+="</div>\n",a=!1),s+=o}return a&&(s+="</div>\n"),s}function p(t,e,n){var r=/\s|=/.test(t);return k(e)?e(t,n):e===v.never||e===v.auto&&!r?t:`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}function g(t){return t.length?t[t.length-1]:null}function l(t){return t.toLowerCase()}h.opts=n({},T.defaults,t),h.tokenize=function(t){var e,n,r,i=[],l=[{type:w,regex:/^([^\[\r\n]+|\[)/},{type:E,regex:/^(\r\n|\r|\n)/},{type:$,regex:/^\[[^\[\]]+\]/},{type:B,regex:/^\[\/[^\[\]]+\]/}];t:for(;t.length;){for(r=l.length;r--;)if(n=l[r].type,(e=t.match(l[r].regex))&&e[0]){i.push(a(n,e[0])),t=t.substr(e[0].length);continue t}t.length&&i.push(a(w,t)),t=""}return i},h.parse=function(t,e){var t=function(t){function e(){return g(f)}function n(t){(e()?e().children:c).push(t)}function r(t){return e()&&(l=y[e().name])&&l.closedBy&&-1<l.closedBy.indexOf(t)}for(var i,l,a,o,s,u=[],c=[],f=[];i=t.shift();)switch(s=t[0],m(e(),i)||i.type===B&&e()&&i.name===e().name||(i.name="#",i.type=w),i.type){case $:r(i.name)&&f.pop(),n(i),(l=y[i.name])&&!l.isSelfClosing&&(l.closedBy||d(i.name,B,t))?f.push(i):l&&l.isSelfClosing||(i.type=w);break;case B:if(e()&&i.name!==e().name&&r("/"+i.name)&&f.pop(),e()&&i.name===e().name)e().closing=i,f.pop();else if(d(i.name,$,f)){for(;a=f.pop();){if(a.name===i.name){a.closing=i;break}a=a.clone(),u.length&&a.children.push(g(u)),u.push(a)}for(s&&s.type===E&&(l=y[i.name])&&!1===l.isInline&&(n(s),t.shift()),n(g(u)),o=u.length;o--;)f.push(u[o]);u.length=0}else i.type=w,n(i);break;case E:e()&&s&&r((s.type===B?"/":"")+s.name)&&(s.type===B&&s.name===e().name||((l=y[e().name])&&l.breakAfter||l&&!1===l.isInline&&h.opts.breakAfterBlock&&!1!==l.breakAfter)&&f.pop()),n(i);break;default:n(i)}return c}(h.tokenize(t)),n=h.opts;return n.fixInvalidNesting&&function t(e,n,r,i){function l(t){return!(t=y[t.name])||!1!==t.isInline}var a,o;for(n=n||[],i=i||e,o=0;o<e.length;o++)if((a=e[o])&&a.type===$){if(r&&!l(a)){var s,u,c=(s=g(n)).splitAt(a),f=1<n.length?n[n.length-2].children:i;if(m(a,s)&&((u=s.clone()).children=a.children,a.children=[u]),-1<(s=f.indexOf(s)))return c.children.splice(0,1),f.splice(s+1,0,a,c),(u=c.children[0])&&u.type===E&&!l(a)&&(c.children.splice(0,1),f.splice(s+2,0,u))}n.push(a),t(a.children,n,r||l(a),i),n.pop()}}(t),function t(e,n,r){for(var i,l,a,o,s,u,c,f,d=e.length,m=(n&&(o=y[n.name]),d);m--;)(i=e[m])&&(i.type===E?(l=0<m?e[m-1]:null,a=m<d-1?e[m+1]:null,f=!1,!r&&o&&!0!==o.isSelfClosing&&(l?u||a||(!1===o.isInline&&h.opts.breakEndBlock&&!1!==o.breakEnd&&(f=!0),u=f=o.breakEnd?!0:f):(!1===o.isInline&&h.opts.breakStartBlock&&!1!==o.breakStart&&(f=!0),o.breakStart&&(f=!0))),l&&l.type===$&&(s=y[l.name])&&(r?!1===s.isInline&&(f=!0):(!1===s.isInline&&h.opts.breakAfterBlock&&!1!==s.breakAfter&&(f=!0),s.breakAfter&&(f=!0))),!r&&!c&&a&&a.type===$&&(s=y[a.name])&&(!1===s.isInline&&h.opts.breakBeforeBlock&&!1!==s.breakBefore&&(f=!0),c=f=s.breakBefore?!0:f)?e.splice(m,1):(f&&e.splice(m,1),c=!1)):i.type===$&&t(i.children,i,r))}(t,null,e),n.removeEmptyTags&&function t(e){for(var n,r,i=e.length;i--;)(n=e[i])&&n.type===$&&(r=y[n.name],t(n.children),function(t){for(var e=t.length;e--;){var n=t[e].type;if(n===$||n===B)return!1;if(n===w&&/\S|\u00A0/.test(t[e].val))return!1}return!0}(n.children))&&r&&!r.isSelfClosing&&!r.allowsEmpty&&e.splice.apply(e,[i,1].concat(n.children))}(t),t},h.toHTML=function(t,e){return c(h.parse(t,e),!0)},h.toHTMLFragment=function(t,e){return c(h.parse(t,e),!1)},h.toBBCode=function(t,e){return function t(e){for(var n,r,i,l,a,o,s,u,c,f="";0<e.length;)if(n=e.shift())if(c=!(!(i=y[n.name])||!1!==i.isInline),l=i&&i.isSelfClosing,o=c&&h.opts.breakBeforeBlock&&!1!==i.breakBefore||i&&i.breakBefore,s=c&&!l&&h.opts.breakStartBlock&&!1!==i.breakStart||i&&i.breakStart,u=c&&h.opts.breakEndBlock&&!1!==i.breakEnd||i&&i.breakEnd,c=c&&h.opts.breakAfterBlock&&!1!==i.breakAfter||i&&i.breakAfter,a=(i?i.quoteType:null)||h.opts.quoteType||v.auto,i||n.type!==$)if(n.type===$){if(o&&(f+="\n"),f+="["+n.name,n.attrs)for(r in n.attrs.defaultattr&&(f+="="+p(n.attrs.defaultattr,a,"defaultattr"),delete n.attrs.defaultattr),n.attrs)n.attrs.hasOwnProperty(r)&&(f+=` ${r}=`+p(n.attrs[r],a,r));f+="]",s&&(f+="\n"),n.children&&(f+=t(n.children)),l||i.excludeClosing||(u&&(f+="\n"),f+=`[/${n.name}]`),c&&(f+="\n"),n.closing&&l&&(f+=n.closing.val)}else f+=n.val;else f+=n.val,n.children&&(f+=t(n.children)),n.closing&&(f+=n.closing.val);return f}(h.parse(t,e))}}function c(t){return t=parseInt(t,10),isNaN(t)?"00":(t=Math.max(0,Math.min(t,255)).toString(16)).length<2?"0"+t:t}function d(t){var e;return(e=(t=t||"#000").match(/rgb\((\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3})\)/i))?"#"+c(e[1])+c(e[2])+c(e[3]):(e=t.match(/#([0-9a-f])([0-9a-f])([0-9a-f])\s*?$/i))?"#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]:t}function m(){var u=this,i=(u.stripQuotes=o,{}),d={ul:["li","ol","ul"],ol:["li","ol","ul"],table:["tr"],tr:["td","th"],code:["br","p","div"]};function m(l,a,e){function o(t){var e=t[0],t=t[1],n=h.getStyle(l,e),r=l.parentNode;return!(!n||r&&h.hasStyle(r,e,n))&&(!t||t.includes(n))}function t(t){i[t]&&i[t][e]&&b(i[t][e],function(t,e){var n,r=y[t].strictMatch,i=(r=void 0===r?u.opts.strictMatch:r)?"every":"some";if(!e||e[i]((n=r,function(t){var e=t[0],t=t[1];return("style"!==e||"CODE"!==l.nodeName)&&("style"===e&&t?t[n?"every":"some"](o):(e=s(l,e))&&(!t||t.includes(e)))})))return e=y[t].format,a=k(e)?e.call(u,l,a):function(t){var n=arguments;return t.replace(/\{(\d+)\}/g,function(t,e){return void 0!==n[+e+1]?n[+e+1]:`{${e}}`})}(e,a),!1})}return t("*"),t(l.nodeName.toLowerCase()),a}function c(t,e){return function s(t,u,c){var f="";return h.traverse(t,function(t){var e="",n=t.nodeType,r=t.nodeName.toLowerCase(),i="code"===r,l=d[r],a=t.firstChild,o=!0;c&&!(o=-1<c.indexOf(r))&&(l=c),1===n?g(t,".sceditor-nlf")&&!a||("iframe"!==r&&(e=s(t,u||i,l)),o?(u||(i||(e=m(t,e,!1)),e=m(t,e,!0)),f+=function(n,r){var i,l,a=n.nodeName.toLowerCase(),o=h.isInline;if(!o(n,!0)||"br"===a){let t,e=n.previousSibling;for(;e&&1===e.nodeType&&!g(e,"br")&&o(e,!0)&&!e.firstChild;)e=e.previousSibling;for(;l=(i=n.parentNode)&&i.lastChild,t=l===n,(n=i)&&t&&o(i,!0););t&&"li"!==a||(r+="\n"),"br"!==a&&e&&!g(e,"br")&&o(e,!0)&&(r=`
`+r)}return r}(t,e)):f+=e):3===n&&(f+=t.nodeValue)},!1,!0),f}(t,e)}function t(t,e,n){var r=new T(u.opts.parserOptions),t=t||n?r.toHTMLFragment:r.toHTML;return l=u.opts,t(u.opts.bbcodeTrim?e.trim():e)}function e(t,e,n,r){n=n||document;var i,l=!!h.closest(r,"code"),a=n.createElement("div"),o=n.createElement("div"),s=new T(u.opts.parserOptions);for(o.innerHTML=e,p(a,"visibility","hidden"),a.appendChild(o),n.body.appendChild(a),t&&(a.insertBefore(n.createTextNode("#"),a.firstChild),a.appendChild(n.createTextNode("#"))),r&&p(o,"whiteSpace",p(r,"whiteSpace")),i=o.getElementsByClassName("sceditor-ignore");i.length;)i[0].parentNode.removeChild(i[0]);return h.removeWhiteSpace(a),e=c(o,l),n.body.removeChild(a),e=s.toBBCode(e,!0),u.opts.bbcodeTrim?e.trim():e}u.init=function(){u.opts=this.opts,u.elementToBbcode=c,b(y,function(n,t){var r=!1===t.isInline,t=y[n].tags,e=y[n].styles;e&&(i["*"]=i["*"]||{},i["*"][r]=i["*"][r]||{},i["*"][r][n]=[["style",Object.entries(e)]]),t&&b(t,function(t,e){e&&e.style&&(e.style=Object.entries(e.style)),i[t]=i[t]||{},i[t][r]=i[t][r]||{},i[t][r][n]=e&&Object.entries(e)})}),this.commands=n(!0,{},a,this.commands),this.toBBCode=u.toSource,this.fromBBCode=u.toHtml},u.toHtml=t.bind(null,!1),u.fragmentToHtml=t.bind(null,!0),u.toSource=e.bind(null,!1),u.fragmentToSource=e.bind(null,!0)}u.prototype={clone:function(){var t=this;return new u(t.type,t.name,t.val,n({},t.attrs),[],t.closing?t.closing.clone():null)},splitAt:function(t){var e,n=this.clone();return-1<(t=this.children.indexOf(t))&&(e=this.children.length-t,n.children=this.children.splice(t,e)),n}},T.QuoteType=v,T.defaults={breakBeforeBlock:!1,breakStartBlock:!1,breakEndBlock:!1,breakAfterBlock:!0,removeEmptyTags:!0,fixInvalidNesting:!0,fixInvalidChildren:!0,quoteType:v.auto,strictMatch:!1},m.get=function(t){return y[t]||null},m.set=function(t,e){return t&&e&&((e=n(y[t]||{},e)).remove=function(){delete y[t]},y[t]=e),this},m.rename=function(t,e){return t in y&&(y[e]=y[t],delete y[t]),this},m.remove=function(t){return t in y&&delete y[t],this},m.formatBBCodeString=x,t.formats.bbcode=m,t.BBCodeParser=T}(sceditor);