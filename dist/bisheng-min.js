/*! BiSheng.js 2014-01-08 11:08:19 AM CST */

!function(a){function b(a,b){"object"==typeof module&&module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):"function"==typeof define&&define.cmd?define(a):"undefined"!=typeof KISSY?KISSY.add(a):b&&b()}b(a,function(){window.BiSheng=a()})}(function(){var a=function(){function a(){clearTimeout(l);for(var b=0;b<k.length;b++)k[b]&&k[b]();l=setTimeout(a,50)}function b(a,b,c){function f(){var f=e(a,h,c?[g]:[],c);f&&f.length&&(b(f,a,h),h=d(a,c,[g]))}var g=i++,h=d(a,c,[g]);return f.data=a,b&&b.tpl&&(f.tpl=b.tpl),k.push(f),h}function c(a,b){function c(a){for(var b=0;b<k.length;b++)a(k[b])&&(b<k.__index&&k.__index--,k.splice(b--,1))}"function"==typeof b&&c(function(c){return c===b&&c.data===a}),"function"==typeof a&&c(function(a){return a===b}),void 0!==a&&c(function(b){return b.data===a})}function d(a,b,c){var e,f,g=a.constructor();if(c=c||[],null===a||"object"!=typeof a)return a;b&&(g.$path=c.join("."));for(e in a)f=a[e],void 0!==f&&null!==f&&(f.constructor===Object||f.constructor===Array?f=d(f,b,c.concat(e)):b&&(f=new Object(f),f.$path=c.concat(e).join("."))),g[e]=f;return g}function e(a,b,c,d){function e(a,b){return function(){for(var c=a,d=1;d<b.length-1;d++)c=c[b[d]];return c}}var i=i||[];if(c=c||[],("object"!=typeof a||"object"!=typeof b)&&i.length)return i;if(f(a,b,c,i),g(a,b,c,i),h(a,b,c,i),d)for(var j,k=0;k<i.length;k++)j=i[k],j.root=a,j.context=e(a,j.path)(),j.getContext=e;return i.length?i:void 0}function f(a,b,c,d,e){var g,h;for(g in a)/\$guid|\$path|\$blocks|\$helpers/.test(g)||(h=a[g],g in b?void 0!==h&&null!==h&&void 0!==b[g]&&null!==b[g]&&h.constructor===b[g].constructor&&(h.constructor===Object||h.constructor===Array)&&f(h,b[g],c.concat(g),d,e):d.push({type:e||j.ADD,path:c.concat(g),value:a[g]}));return d.length?d:void 0}function g(a,b,c,d){return f(b,a,c,d,j.DELETE)}function h(a,b,c,d){var e,f;for(e in a)/\$guid|\$path|\$blocks|\$helpers/.test(e)||(f=a[e],e in b&&(void 0!==f||void 0!==b[e])&&(void 0!==f&&null!==f&&void 0!==b[e]&&null!==b[e]&&f.constructor===b[e].constructor?f.constructor!==Object&&f.constructor!==Array?f.valueOf()!==b[e].valueOf()&&d.push({type:j.UPDATE,path:c.concat(e),value:f,oldValue:b[e]}):h(f,b[e],c.concat(e),d):d.push({type:j.UPDATE,path:c.concat(e),value:f,oldValue:void 0!==b[e]?b[e].valueOf():b[e]})));return d.length?d:void 0}var i=1,j={ADD:"add",DELETE:"delete",UPDATE:"update"},k=[];k.__index=0;var l;return l=setTimeout(a,50),{tasks:k,TYPES:j,watch:b,unwatch:c,clone:d,diff:e,letMeSee:a}}();window.JSON||(window.JSON={stringify:function(a){var b,c=[];for(var d in a)b="string"==typeof a[d]?'"'+a[d]+'"':a[d],c.push('"'+d+'":'+b);return"{"+c.join(",")+"}"}});var b={create:function(a){var b=Handlebars.Utils.escapeExpression,c=b("<script");for(var d in a)void 0!==a[d]&&(c+=" "+d+b('="')+a[d]+b('"'));return c+=b("></script>")},getLocatorRegExp:function(){return/(<script(?:.*?)><\/script>)/gi},find:function(a,b){var c="script";for(var d in a)c+="["+d+'="'+a[d]+'"]';return $(c,b)},parse:function(a,b){return $(a).attr(b)},update:function(a,b,c){if("script"===a.nodeName.toLowerCase()&&a.getAttribute("guid")&&"start"===a.getAttribute("slot")&&(c||!a.getAttribute("type")))for(var d in b)$(a).attr(d,b[d]);return a},parseTarget:function(a){for(var b,c=$(a).attr("guid"),d=[],e=a;e=e.nextSibling;)if(b=$(e),"script"===e.nodeName.toLowerCase()&&b.attr("guid")){if(b.attr("guid")===c&&"end"===b.attr("slot"))break}else d.push(e);return $(d)}},c={create:function(a){var b=Handlebars.Utils.escapeExpression;return b("<!-- ")+b(JSON.stringify(a))+b(" -->")},getLocatorRegExp:function(){return/(<!--\s*({(?:.*?)})\s*-->)/gi},find:function(a,b){return $(b).add("*",b).contents().filter(function(){return 8===this.nodeType}).filter(function(b,c){try{var d=new Function("return "+c.nodeValue)();for(var e in a)if(a[e]!==d[e])return!1;return!0}catch(f){return!1}})},parse:function(a,b){var c=new Function("return "+a.nodeValue)();return b?c[b]:c},update:function(a,b,c){if(8===a.nodeType){var d=this.parse(a);if(d.guid&&"start"===d.slot&&(c||!d.type)){for(var e in b)d[e]=b[e];a.nodeValue=" "+JSON.stringify(d)+" "}}return a},parseTarget:function(a){for(var b=this.parse(a),c=[],d=a;d=d.nextSibling;)if(8===d.nodeType){var e=this.parse(d);if(e.guid===b.guid&&"end"===e.slot)break}else c.push(d);return $(c)}},d=[b,c],e=-1!==location.search.indexOf("locator=script")?b:-1!==location.search.indexOf("locator=comment")?c:d[0],f=function(){var a=1,b=Handlebars.helpers["if"];Handlebars.registerHelper("if",function(a,c){return b.call(this,void 0!==a?a.valueOf():a,c)});var c=Handlebars.helpers.blockHelperMissing;return Handlebars.registerHelper("blockHelperMissing",function(a,b){return c.call(this,void 0!==a&&null!==a?a.valueOf():a,b)}),Handlebars.registerHelper("$lastest",function(a){return a&&a.$path||this&&this.$path}),{handle:function(a,b,c,d,e){return 2===arguments.length&&(d=b,b=void 0,e={}),3===arguments.length&&(d=b,e=c,b=c=void 0),this[a.type]&&this[a.type](a,b,c,d,e),a},program:function(a,b,c,d,e){for(var f=0;f<a.statements.length;f++)this.handle(a.statements[f],a.statements,f,d,e)},mustache:function(b,c,d,f,g){if(!b.binded){var h=[];b.isHelper?b.params.forEach(function(a){"ID"===a.type&&h.push(a.string)}):h.push(b.id.string),h=h.join(" ");var i,j,k={guid:a,slot:"",type:"text",path:"{{$lastest "+h+"}}",isHelper:!!b.isHelper};k.slot="start",i=e.create(k),j=Handlebars.parse(i).statements,j[1].binded=!0,c.splice.apply(c,[d,0].concat(j)),i=e.create({guid:k.guid,slot:"end"}),j=Handlebars.parse(i).statements,c.splice.apply(c,[d+4,0].concat(j)),g&&(g[a]={constructor:Handlebars.AST.ProgramNode,type:"program",statements:[b]}),a++,b.binded=!0}},block:function(b,c,d,f,g){if(!b.binded){var h,i;0===b.mustache.params.length?(h="",i=b.mustache.id.string):(h=b.mustache.id.string,i=b.mustache.params[0].string);var j,k,l={guid:a,slot:"",type:"block",path:"{{$lastest "+i+"}}",helper:h};l.slot="start",j=e.create(l),k=Handlebars.parse(j).statements,k[1].binded=!0,c.splice.apply(c,[d,0].concat(k)),j=e.create({guid:l.guid,slot:"end"}),k=Handlebars.parse(j).statements,c.splice.apply(c,[d+4,0].concat(k)),f&&(f[a]={constructor:Handlebars.AST.ProgramNode,type:"program",statements:[b]}),a++,b.binded=!0,this.handle(b.program||b.inverse,c,d,f,g)}}}}(),g=function(){function a(a,c){b(a),g(a,c)}function b(a){switch(a.nodeType){case 1:case 9:case 11:d(a),f(a);break;case 3:c(a)}}function c(a){var b=a.textContent||a.innerText||a.nodeValue;$("<div>"+b+"</div>").contents().each(function(a,b){e.update(b,{type:"text"})}).replaceAll(a)}function d(a){var b=e.getLocatorRegExp(),c=/([^;]*?): ([^;]*)/gi,d=[];$.each(function(){for(var b=[],c=a.attributes,d=0;d<c.length;d++)(c[d].specified||c[d].nodeValue)&&b.push(c[d]);return b}(),function(f,g){var h,i,j=g.nodeName,k=g.nodeValue;if(j=j.toLowerCase(),j="bs-style"===j&&"style"||"bs-checked"===j&&"checked"||"bs-src"===j&&"src"||j,"style"===j)for(c.exec("");i=c.exec(k);)for(b.exec("");h=b.exec(i[2]);)d.push(e.update($("<div>"+h[1]+"</div>").contents()[0],{type:"attribute",name:j,css:$.trim(i[1])},!0));else for(b.exec("");h=b.exec(k);)d.push(e.update($("<div>"+decodeURIComponent(h[1])+"</div>").contents()[0],{type:"attribute",name:j},!0));d.length&&(k=k.replace(b,""),g.nodeValue=k,"style"===j&&$(a).attr("style",k),"checked"===j&&"true"===k&&$(a).attr("checked","checked"),"src"===j&&$(a).attr("src",k),$(d).each(function(b,c){var d=e.parse(c,"slot");"start"===d&&$(a).before(c),"end"===d&&$(a).after(c)}))})}function f(a){$(a.childNodes).each(function(a,c){b(c)})}function g(a,b){e.find({slot:"start",type:"attribute",name:"value"},a).each(function(a,c){var d=e.parse(c,"path").split("."),f=e.parseTarget(c)[0];$(f).on("change.bisheng keyup.bisheng",function(a){h(b,d,a.target)})}),e.find({slot:"start",type:"attribute",name:"checked"},a).each(function(a,c){for(var d=e.parse(c,"path").split("."),f=e.parseTarget(c)[0],g=b,h=1;h<d.length;h++)g=g[d[h]];(void 0===g||g.valueOf()===!1||"false"===g.valueOf())&&$(f).prop("checked",!1),void 0===g||g.valueOf()!==!0&&"true"!==g.valueOf()&&"checked"!==g.valueOf()||$(f).prop("checked",!0),$(f).on("change.bisheng",function(a,c){c||"radio"!==a.target.type||$('input:radio[name="'+a.target.name+'"]').not(a.target).trigger("change",c=!0),i(b,d,a.target)})})}function h(a,b,c){for(var d=1;d<b.length-1;d++)a=a[b[d]];var e,f=$(c);switch(c.nodeName.toLowerCase()){case"input":switch(c.type){case"text":f.data("user is editing",!0),e=f.val();break;case"radio":case"checkbox":return;default:e=f.val()}break;case"select":e=f.val();break;case"textarea":e=f.val();break;default:e=f.val()}a[b[b.length-1]]=e}function i(a,b,c){for(var d=1;d<b.length-1;d++)a=a[b[d]];var e,f,g=$(c);switch(c.nodeName.toLowerCase()){case"input":switch(c.type){case"radio":e=g.prop("checked"),f=g.attr("name"),f&&e&&f in a&&(a[f]=g.val());break;case"checkbox":e=g.prop("checked")}}a[b[b.length-1]]=e}return{scan:a}}(),h=function(){function b(a,c,d,f){var g,h=e.find({slot:"start",path:c.path.join(".")},f||document.body);("delete"===c.type||"add"===c.type)&&c.context instanceof Array&&(c.path.pop(),c.type="update",c.context=c.getContext(c.root,c.path)(),b(a,c,d)),h.each(function(f,h){g=e.parse(h,"type"),b[g]&&b[g](h,a,c,d)})}function c(a){a.target.nodeType&&(a.target=[a.target]),a.target.forEach&&a.target.forEach(function(a){switch(a.nodeType){case 3:a.parentNode.scrollIntoView();break;case 1:a.scrollIntoView()}})}function d(a){a.target.nodeType&&(a.target=[a.target]),a.target.forEach&&a.target.forEach(function(a){switch(a.nodeType){case 3:$(a).wrap("<span>").parent().addClass("transition highlight"),setTimeout(function(){$(a).unwrap("<span>").removeClass("transition highlight")},500);break;case 1:$(a).addClass("transition highlight"),setTimeout(function(){$(a).removeClass("transition highlight")},500)}})}return b.text=function(a,b,c,d){var f,g=e.parse(a,"guid"),h=e.parse(a,"helper"),j=e.parseTarget(a);1===j.length&&3===j[0].nodeType?(b.target.push(j[0]),j[0].nodeValue=c.value):(f="true"===h?Handlebars.compile(d.$helpers[g])(c.context):c.value,i.convert(f).contents().insertAfter(a).each(function(a,c){b.target.push(c)}),$(j).remove())},b.attribute=function(b,c,d,f){var g,h,i;c.target.push(g=e.parseTarget(b)[0]),i=$(g);var j=f.$blocks[e.parse(b,"guid")],k=j?Handlebars.compile(j)(d.context):d.value,l=function(){var b,c=a.clone(d.context,!0,d.path.slice(0,-1));return c[d.path[d.path.length-1]]=void 0!==d.oldValue?d.oldValue.valueOf():d.oldValue,b=j?Handlebars.compile(j)(c):d.oldValue}();switch(h=e.parse(b,"name")){case"class":i.removeClass(""+l).addClass(""+k);break;case"bs-style":case"style":i.css(e.parse(b,"css"),k);break;case"value":i.val()===k||i.data("user is editing")||i.val(k),i.data("user is editing",!1);break;case"checked":i.prop(h,k),h=i.attr("name"),h&&i.prop("checked")&&h in d.context&&(d.context[h]=i.val());break;default:i.attr(h,function(a,b){return void 0===l?k:b!==l.valueOf()?b.replace(l,k):k})}},b.block=function(b,c,d,f){var h=e.parse(b,"guid"),j=f.$blocks[h],k=a.clone(d.context,!0,d.path.slice(0,-1)),l=Handlebars.compile(j)(k);l=i.convert(l),g.scan(l[0],d.context),l=l.contents();var m=e.parseTarget(b),n=m.length?m[m.length-1].nextSibling:b.nextSibling;return 0===l.length?($(m).remove(),void 0):(l.length<m.length&&$(m.splice(l.length,m.length-l.length)).remove(),l.each(function(a,b){return m[a]?b.nodeType!==m[a].nodeType?(m[a].parentNode.insertBefore(b,m[a]),m[a].parentNode.removeChild(m[a]),c.target.push(b),void 0):3===b.nodeType&&b.nodeValue!==m[a].nodeValue?(m[a].nodeValue=b.nodeValue,void 0):8===b.nodeType&&b.nodeValue!==m[a].nodeValue?(m[a].nodeValue=b.nodeValue,void 0):1===b.nodeType&&b.outerHTML!==m[a].outerHTML?(m[a].parentNode.insertBefore(b,m[a]),m[a].parentNode.removeChild(m[a]),c.target.push(b),void 0):void 0:(n.parentNode.insertBefore(b,n),c.target.push(b),void 0)}),void 0)},{handle:b,scrollIntoView:c,highlight:d}}(),i={},j=/<([\w:]+)/,k={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[1,"<div>","</div>"]};k.optgroup=k.option,k.tbody=k.tfoot=k.colgroup=k.caption=k.thead,k.th=k.td,i.wrap=function(){},i.convert=function(a){var b=(j.exec(a)||["",""])[1].toLowerCase(),c=k[b]||k._default,d=c[0],e=document.createElement("div");for(e.innerHTML=c[1]+a+c[2];d--;)e=e.lastChild;return $(e)},i.table=function(a){return a.replace(/(<table.*?>)([\w\W]*?)(<\/table>)/g,function(a){return a.replace(/(>)([\w\W]*?)(<)/g,function(a,b,c,d){if(c.indexOf("&lt;")>-1){var e="";return i.convert(c).contents().each(function(a,b){e+=b.nodeValue}),b+e+d}return b+c+d})})};var l={version:"0.1.0",bind:function(b,c,d,e){function j(a){$.each(a,function(a,c){var d={target:[]};h.handle(d,c,k,e),location.href.indexOf("scrollIntoView")>-1&&h.scrollIntoView(d,b),location.href.indexOf("highlight")>-1&&h.highlight(d,b)})}j.tpl=c;var k=a.watch(b,j,!0,!0);c=c.replace(/(<.*?)(style)(=.*?>)/g,"$1bs-style$3").replace(/(<input.*?)(checked)(=.*?>)/g,"$1bs-checked$3").replace(/(<img.*?)(src)(=.*?>)/g,"$1bs-src$3");var l=Handlebars.parse(c);f.handle(l,void 0,void 0,k.$blocks={},k.$helpers={});var m=Handlebars.compile(l),n=m(k);n=i.table(n);var o=$(i.convert(n));return o.length&&g.scan(o[0],b),o=o.contents().get(),d?d.call(b,o)||o:o},unbind:function(b,c){if(c)for(var d,e=0;e<a.tasks.length;e++)d=a.tasks[e],d.data===b&&d.tpl===c&&a.tasks.splice(e--,1);else a.unwatch(b);return this},watch:function(b,c){return a.watch(b,c,!0),this},unwatch:function(b,c){return a.unwatch(b,c),this}};return l.Loop=a,l.Locators=d,l.Locator=e,l.AST=f,l.Scanner=g,l.Flush=h,l});
//# sourceMappingURL=dist/bisheng-min.map