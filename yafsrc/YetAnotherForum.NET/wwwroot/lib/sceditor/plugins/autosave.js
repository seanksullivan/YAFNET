/* SCEditor for YAF.NET v4.0.0-rc.2 | (C) 2024, Sam Clarke | sceditor.com/license */
!function(e){"use strict";var t="sce-autodraft-"+location.pathname+location.search;function c(e){localStorage.removeItem(e||t)}e.plugins.autosave=function(){var o,e=this,a=!1,r=t,n=864e5,s=function(e){localStorage.setItem(r,JSON.stringify(e))},i=function(){return JSON.parse(localStorage.getItem(r))};e.init=function(){var e=(o=this).opts&&o.opts.autosave||{};s=e.save||s,i=e.load||i,r=e.storageKey||r,n=e.expires||n;for(let e=0;e<localStorage.length;e++){var t,a=localStorage.key(e);/^sce\-autodraft\-/.test(a)&&(t=JSON.parse(localStorage.getItem(r)))&&t.time<Date.now()-n&&c(a)}},e.signalReady=function(){for(var e=o.getContentAreaContainer();e;){if(/form/i.test(e.nodeName)){e.addEventListener("submit",c.bind(null,r),!0);break}e=e.parentNode}var t=i();t?(a=!0,o.sourceMode(t.sourceMode),o.val(t.value,!1),o.focus(),t.sourceMode?o.sourceEditorCaret(t.caret):o.getRangeHelper().restoreRange(),a=!1):s({caret:this.sourceEditorCaret(),sourceMode:this.sourceMode(),value:o.val(null,!1),time:Date.now()})},e.signalValuechangedEvent=function(e){a||s({caret:this.sourceEditorCaret(),sourceMode:this.sourceMode(),value:e.detail.rawValue,time:Date.now()})}},e.plugins.autosave.clear=c}(sceditor);