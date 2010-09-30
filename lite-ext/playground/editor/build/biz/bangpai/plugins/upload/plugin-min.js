KISSY.Editor.add("bangpai-upload",function(r){var f=KISSY,k=f.Editor;if(!k.BangPaiUpload){(function(){function s(a){this.editor=a;this._init()}var t=f.DOM,u=f.JSON,g=f.Node,v=k.Config.base+k.Utils.debugUrl("plugins/uploader/uploader.swf"),n={};name="ke-bangpai-upload";t.addStyleSheet(".ke-upload-list {width:100%;}.ke-upload-list th {border-top:1px solid #c1c8d1;background-color:#EBEDF1;}.ke-upload-list td,.ke-upload-list th {padding:0.5em;text-align:center;border-bottom:1px solid #c1c8d1;}","ke-BangPaiUpload");
f.augment(s,f.EventTarget,{_init:function(){var a=this,b=a.editor,c=b.cfg.pluginConfig["bangpai-upload"],d=c.holder;d=f.isString(d)?f.one(d):d;var h=(new g("<div style='position:relative;margin:10px;'>批量上传图片：</div>")).appendTo(d);d=(new g("<div style='display:none'>")).appendTo(d);var e=(new g("<button disabled='disabled'>浏览</button>")).appendTo(h),p=e.offset();h.offset();h=(new g("<div style='"+("position:absolute;width:"+(e.width()+8)+"px;height:"+(e.height()+8)+"px;z-index:9999;")+"'>")).appendTo(h);
var i=(new g("<div><table class='ke-upload-list'><thead><tr><th>序号</th><th>图片</th><th>大小</th><th>上传进度</th><th>图片操作</th></tr></thead><tbody></tbody></table></div>")).appendTo(d).one("tbody"),l=(new g("<p style='margin:10px;text-align:right;'><button>确定上传</button></p>")).appendTo(d).one("button"),o=f.guid(name);a.btn=e;a.up=l;h.offset(p);var j=new k.FlashBridge({movie:v,methods:["removeFile","cancel","removeFile","disable","enable","setAllowMultipleFiles","setFileFilters","uploadAll"],holder:h,attrs:{width:e.width(),
height:e.height()},params:{wmode:"transparent"},flashVars:{allowedDomain:location.hostname,menu:true}});a.uploader=j;a._list=i;a._listWrap=d;a._ds=c.serverUrl;a._dsp=c.serverParams||{};a._fileInput=c.fileInput||"Filedata";a._sizeLimit=c.sizeLimit||1E3;a._numberLimit=c.numberLimit||15;i.on("click",function(m){var q=new g(m.target);m.halt();if(q.hasClass("ke-upload-insert")){m=q.parent("tr");url=m.attr("url");b.insertElement(new g("<img src='"+url+"'/>",null,b.document))}else if(q.hasClass("ke-upload-delete")){m=
q.parent("tr");o=m.attr("fid");try{j.cancel(o)}catch(w){}j.removeFile(o);n[o].destroy();delete n[o];m._4e_remove();a.enable();a._seqPics()}});j.on("fileSelect",a._onSelect,a);j.on("uploadStart",a._onUploadStart,a);j.on("uploadProgress",a._onProgress,a);j.on("uploadComplete",a._onComplete,a);j.on("uploadCompleteData",a._onUploadCompleteData,a);j.on("swfReady",a._ready,a);j.on("uploadError",a._uploadError,a)},_uploadError:function(a){var b=a.id,c=this._getFileTr(b);b=n[b];if(c){b&&b.destroy();c.one(".ke-upload-progress").html("<span style='color:red'>"+
a.status+"</span>")}},_getFileTr:function(a){for(var b=this._list.all("tr"),c=0;c<b.length;c++){var d=new g(b[c]);if(d.attr("fid")==a)return d}},_onUploadStart:function(a){this.uploader.removeFile(a.id)},_onComplete:function(){},_onUploadCompleteData:function(a){var b=f.trim(a.data).replace(/\\r||\\n/g,"");a=a.id;if(b){b=u.parse(b);if(b.error)this._uploadError({id:a,status:b.error});else if(a=this._getFileTr(a)){a.one(".ke-upload-insert").show();a.attr("url",b.imgUrl)}}},_onProgress:function(a){var b=
Math.floor(a.bytesLoaded*100/a.bytesTotal);(a=n[a.id])&&a.set("progress",b)},disable:function(){this.uploader.disable();this.btn[0].disabled=true},enable:function(){this.uploader.enable();this.btn[0].disabled=false},_seqPics:function(){var a=1;this._list.all(".ke-upload-seq").each(function(b){b.html(a++)})},_getFilesSize:function(a){var b=0,c;for(c in a)b++;return b},_onSelect:function(a){var b=this.uploader,c=this._list,d=0;a=a.fileList;var h=this._numberLimit-c.all("tr").length;if(a){var e=this._getFilesSize(a);
e>h&&alert("系统将只保留n张".replace(/n/,this._numberLimit));e>=h&&this.disable();this._listWrap.show();for(var p in a)if(a.hasOwnProperty(p)){var i=a[p];if(!this._getFileTr(i.id)){e=Math.floor(i.size/1E3);var l=i.id;d++;if(d>h)b.removeFile(l);else{i=(new g("<tr fid='"+l+"'><td class='ke-upload-seq'></td><td>"+i.name+"</td><td>"+e+"k</td><td class='ke-upload-progress'></td><td><a href='#' class='ke-upload-insert' style='display:none'>[插入]</a> &nbsp; <a href='#' class='ke-upload-delete'>[删除]</a> &nbsp; </td></tr>")).appendTo(c);
i.one(".ke-upload-progress");if(e>this._sizeLimit){this._uploadError({id:l,status:"图片不能超过nM".replace(/n/,this._sizeLimit)});b.removeFile(l)}else n[l]=new k.ProgressBar({container:i.one(".ke-upload-progress"),width:"100px",height:"18px"})}}}this._seqPics()}},_ready:function(){var a=this,b=a.uploader,c=a.up;a.btn[0].disabled=false;b.setAllowMultipleFiles(true);b.setFileFilters([{extensions:"*.jpeg;*.jpg;*.png;*.gif",description:"图片文件( png,jpg,jpeg,gif )"}]);c.on("click",function(d){d.halt();b.uploadAll(a._ds,
"POST",a._dsp,a._fileInput)})}});k.BangPaiUpload=s})();r.addPlugin(function(){new k.BangPaiUpload(r)})}},{attach:false,requires:["flashutils","progressbar","flashbridge"]});
