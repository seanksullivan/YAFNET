/* SCEditor v4.0.0-rc.2 | (C) 2024, Sam Clarke | sceditor.com/license */
!function(s){"use strict";s.plugins.emojis=function(){function e(e){const i=this,o=document.createElement("div"),t=i.opts.emojis||[],c=Math.sqrt(Object.keys(t).length);var r,n;t.length?(r=document.createElement("div"),s.utils.each(t,function(e,t){var n=document.createElement("span");n.className="sceditor-option",n.style="cursor:pointer",n.appendChild(document.createTextNode(t)),n.addEventListener("click",function(e){i.closeDropDown(!0),i.insert(e.target.innerHTML),e.preventDefault()}),r.children.length>=c&&(r=document.createElement("div")),o.appendChild(r),r.appendChild(n)})):(n=new EmojiMart.Picker({onEmojiSelect:function(e){i.insert(e.native),i.closeDropDown(!0)}}),o.appendChild(n)),i.createDropDown(e,"emojis",o)}this.init=function(){this.commands.emojis={exec:e,txtExec:e,tooltip:"Insert emoji",shortcut:"Ctrl+E"}}}}(sceditor);