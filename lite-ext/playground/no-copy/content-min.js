KISSY.ready(function(c){var i="textarea",b="\u7981\u6b62copy!",g=c.Event,f=document,d=f.body,h=c.DOM,e=c.Node,a=new e(d.appendChild(h.create("<"+i+' rows="1" cols="1" style="position:absolute;left:-9999px;">'+b+"</"+i+">")));g.on(document,"contextmenu",function(j){j.halt()});g.on(document,"keydown",function(l){var m=l.keyCode;if(m===67&&(l.ctrlKey||l.metaKey)){var j=new c.Selection(f),k=j.getRanges()[0];a[0].focus();a[0].select();setTimeout(function(){k.select()},0)}});d.appendChild(document.createTextNode("\u6211\u662f\u5185\u5bb9\uff0c\u4f60\u53ef\u4ee5copy\u6211\u770b\u770b\uff01"))});
