!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"+S2w":function(e,o,a){"use strict";a.r(o),a.d(o,"GiftutilizeModuleNgFactory",(function(){return P}));var i=a("8Y7J"),r=a("lJxs"),s=function(){function e(n,o,a){var i=this;t(this,e),this.http=n,this.router=o,this.api=a,this.componentActive=!0,this.giftsData=[],this.showLoading=!1,this.utilizationTableOptions={dom:"Bfrtip",lengthMenu:[[10,25,50,-1],[10,25,50,"All"]],ajax:function(t,e,n){i.http.get("http://3.108.79.136:3000/api/v1/gift/gift-utilization/acb7f015-8b55-42ac-9ea9-915144dd5142").pipe(Object(r.a)(i.formatJSONData)).subscribe((function(t){e({aaData:null==t?[]:t})}))},columns:[{title:"Date",data:"created_date",render:function(t,e,n){if(null!=t){var o=new Date(t),a=o.getDate(),i=o.getMonth()+1,r=o.getFullYear();return a<10&&(a="0"+a),i<10&&(i="0"+i),"".concat(a,"-").concat(i,"-").concat(r)}return"-"}},{title:"Name",data:"name"},{title:"UTILIZATION (CROWNS)",data:"added_by"},{title:"IMAGE",data:"icon",render:function(t,e,n){return null!=t?'<img src="assets/images/gifts/Champagne.png" alt class="img-fluid"         style="max-width: 50px;">':"-"}},{title:"UTILIZATION IN PEARLS",data:"status",render:function(t,e,n){return 25e5}},{title:"SINGLE",data:"status",render:function(t,e,n){return 250}},{title:"MULTIPLE",data:"status",render:function(t,e,n){return 333}},{title:"STATUS",data:"status",render:function(t,e,n){return'<label class="" style="color:#9ccc65">Active</label>'}}],buttons:[]}}return n(e,[{key:"formatJSONData",value:function(t){return t.data[0]||{}}},{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.componentActive=!1}},{key:"view",value:function(t){this.api.giftId=t,this.router.navigate(["/gift/add"])}},{key:"add",value:function(){this.router.navigate(["/gift/add"])}}]),e}(),u=function e(){t(this,e)},l=a("pMnS"),p=a("rMcs"),c=a("W8s6"),d=a("9AJC"),g=a("K+Kt"),h=a("IheW"),f=a("iInd"),v=a("H+bZ"),m=i["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function k(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,4,"div",[["class","row py-3"]],null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,0,"div",[["class","col-md-12 py-3 mt-3 mb-3"]],null,null,null,null,null)),(t()(),i["\u0275eld"](2,0,null,null,2,"div",[["class","col-md-12 table-responsive"]],null,null,null,null,null)),(t()(),i["\u0275eld"](3,0,null,null,1,"table",[["class","table table-striped table-bordered table-hover"],["datatable",""]],null,null,null,null,null)),i["\u0275did"](4,212992,null,0,g.a,[i.ElementRef],{dtOptions:[0,"dtOptions"]},null)],(function(t,e){t(e,4,0,e.component.utilizationTableOptions)}),null)}var y=i["\u0275ccf"]("app-giftutilize",s,(function(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"app-giftutilize",[],null,null,null,k,m)),i["\u0275did"](1,245760,null,0,s,[h.c,f.o,v.a],null,null)],(function(t,e){t(e,1,0)}),null)}),{},{},[]),b=a("SVse"),w=a("s7LF"),T=a("luWi"),I=a("0NUV"),S=a("DoSW"),C=a("G0yt"),x=a("w2bA"),L=a("9OXH"),_=a("7oHd"),j=a("aLe/"),A=a("N4L5"),O=a("wcvO"),D=a("z0HF"),N=a("sIwa"),R=a("bxSN"),E=a("iAM3"),M=a("KLca"),z=a("ebz3"),F=a("axVG"),P=i["\u0275cmf"](u,[],(function(t){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[l.a,p.a,c.a,d.a,d.b,d.l,d.m,d.i,d.j,d.k,y]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[i.LOCALE_ID]),i["\u0275mpd"](4608,w.y,w.y,[]),i["\u0275mpd"](4608,w.e,w.e,[]),i["\u0275mpd"](4608,T.LightboxConfig,T.LightboxConfig,[]),i["\u0275mpd"](4608,I.LightboxEvent,I.LightboxEvent,[]),i["\u0275mpd"](4608,S.Lightbox,S.Lightbox,[i.ComponentFactoryResolver,i.Injector,i.ApplicationRef,T.LightboxConfig,I.LightboxEvent]),i["\u0275mpd"](4608,I.LightboxWindowRef,I.LightboxWindowRef,[]),i["\u0275mpd"](4608,C.C,C.C,[i.ComponentFactoryResolver,i.Injector,C.Db,C.D]),i["\u0275mpd"](4608,x.a,x.a,[]),i["\u0275mpd"](4608,L.a,L.a,[]),i["\u0275mpd"](4608,_.a,_.a,[]),i["\u0275mpd"](1073742336,f.s,f.s,[[2,f.x],[2,f.o]]),i["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),i["\u0275mpd"](1073742336,j.d,j.d,[]),i["\u0275mpd"](1073742336,w.x,w.x,[]),i["\u0275mpd"](1073742336,w.j,w.j,[]),i["\u0275mpd"](1073742336,w.t,w.t,[]),i["\u0275mpd"](1073742336,A.a,A.a,[]),i["\u0275mpd"](1073742336,C.z,C.z,[]),i["\u0275mpd"](1073742336,O.a,O.a,[]),i["\u0275mpd"](1073742336,D.a,D.a,[]),i["\u0275mpd"](1073742336,N.a,N.a,[]),i["\u0275mpd"](1073742336,R.ClickOutsideModule,R.ClickOutsideModule,[]),i["\u0275mpd"](1073742336,E.LightboxModule,E.LightboxModule,[]),i["\u0275mpd"](1073742336,C.c,C.c,[]),i["\u0275mpd"](1073742336,C.f,C.f,[]),i["\u0275mpd"](1073742336,C.h,C.h,[]),i["\u0275mpd"](1073742336,C.l,C.l,[]),i["\u0275mpd"](1073742336,C.n,C.n,[]),i["\u0275mpd"](1073742336,C.t,C.t,[]),i["\u0275mpd"](1073742336,C.E,C.E,[]),i["\u0275mpd"](1073742336,C.L,C.L,[]),i["\u0275mpd"](1073742336,C.Q,C.Q,[]),i["\u0275mpd"](1073742336,C.W,C.W,[]),i["\u0275mpd"](1073742336,C.Z,C.Z,[]),i["\u0275mpd"](1073742336,C.eb,C.eb,[]),i["\u0275mpd"](1073742336,C.ob,C.ob,[]),i["\u0275mpd"](1073742336,C.rb,C.rb,[]),i["\u0275mpd"](1073742336,C.sb,C.sb,[]),i["\u0275mpd"](1073742336,C.tb,C.tb,[]),i["\u0275mpd"](1073742336,C.jb,C.jb,[]),i["\u0275mpd"](1073742336,C.F,C.F,[]),i["\u0275mpd"](1073742336,M.a,M.a,[]),i["\u0275mpd"](1073742336,z.a,z.a,[]),i["\u0275mpd"](1073742336,F.a,F.a,[]),i["\u0275mpd"](1073742336,u,u,[]),i["\u0275mpd"](256,j.a,z.b,[]),i["\u0275mpd"](1024,f.m,(function(){return[[{path:"",component:s}]]}),[])])}))},"H+bZ":function(e,o,a){"use strict";a.d(o,"a",(function(){return u}));var i=a("IheW"),r=a("8Y7J"),s="http://3.108.79.136:3000",u=function(){var e=function(){function e(n){t(this,e),this.http=n,this.notificationId="",this.announcementId="",this.crownId="",this.giftId=""}return n(e,[{key:"getGiftsData",value:function(t){return this.http.get(s+"/gifts")}},{key:"getGiftById",value:function(t){return this.http.get(s+"/gifts/"+t)}},{key:"deleteGift",value:function(t){var e={headers:new i.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(s+"/api/v1/gift/delete-gift/"+t,e)}},{key:"updateGift",value:function(t,e){var n={headers:new i.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(s+"/api/v1/gift/edit-gift",t,n)}},{key:"getCrownsList",value:function(t){return this.http.get(s+"/crowns")}},{key:"getCrownByID",value:function(t){return this.http.get(s+"/crowns/"+t)}},{key:"saveCrown",value:function(t){return this.http.post(s+"/crowns/add",t)}},{key:"updateCrown",value:function(t,e){return this.http.put(s+"/crowns/update/"+e,t)}},{key:"deleteCrown",value:function(t){var e={headers:new i.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.put(s+"/api/v1/admin/secure/delete/crown-value/"+t,{},e)}},{key:"getBonusDetails",value:function(){return this.http.get(s+"/bonus")}},{key:"updateBonus",value:function(t,e){return this.http.put(s+"/bonus/update/"+e,t)}},{key:"saveGift",value:function(t){var e={headers:new i.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(s+"/api/v1/gift/add-gift",t,e)}},{key:"getCrownToPearls",value:function(){return this.http.get(s+"/crown_to_pearl")}},{key:"getCrownToPearlsbyId",value:function(t){return this.http.get(s+"/crown_to_pearl/"+t)}},{key:"updateCrownToPearls",value:function(t,e){return this.http.put(s+"/crown_to_pearl/update/"+e,t)}},{key:"saveCrownToPearls",value:function(t){return this.http.post(s+"/crown_to_pearl/add",t)}},{key:"getEarningSetup",value:function(){return this.http.get(s+"/earning_setup")}},{key:"getEarningSetupId",value:function(t){return this.http.get(s+"/earning_setup/"+t)}},{key:"updateEarningSetup",value:function(t,e){return this.http.put(s+"/earning_setup/update/"+e,t)}},{key:"saveEarningSetup",value:function(t){return this.http.post(s+"/earning_setup/add",t)}},{key:"getNotification",value:function(){return this.http.get(s+"/notification")}},{key:"getNotificationById",value:function(t){return this.http.get(s+"/notification/"+t)}},{key:"updateNotification",value:function(t,e){return this.http.put(s+"/notification/update/"+e,t)}},{key:"saveNotification",value:function(t){return this.http.post(s+"/notification/add",t)}},{key:"getAnnouncement",value:function(){return this.http.get(s+"/announcement")}},{key:"getAnnouncementById",value:function(t){return this.http.get(s+"/announcement/"+t)}},{key:"updateAnnouncement",value:function(t,e){return this.http.put(s+"/announcement/update/"+e,t)}},{key:"saveAnnouncement",value:function(t){return this.http.post(s+"/announcement/add",t)}},{key:"addUser",value:function(t){var e={headers:new i.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(s+"/api/v1/admin/secure/add-user",t,e)}},{key:"fetchUsers",value:function(){return this.http.get(s+"/user")}},{key:"setCrown",value:function(t){var e={headers:new i.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(s+"/api/v1/admin/secure/set/crown-value",t,e)}},{key:"editCrown",value:function(t){var e={headers:new i.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.put(s+"/api/v1/admin/secure/crown-value",t,e)}},{key:"adminLogin",value:function(t){return this.http.post(s+"/api/v1/admin/login",t)}},{key:"addPearlToRm",value:function(t){return this.http.post(s+"/crown_to_pearl/add",t)}},{key:"addPearlToRmConvert",value:function(t){var e=new i.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(s+"/pearl_to_money/validate",t)}},{key:"editPeraltoRmConvert",value:function(t,e){var n=new i.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(s+"/pearl_to_money/update/"+e,t)}},{key:"fetchStreamByType",value:function(t){var e={headers:new i.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(s+"/api/v1/admin/secure/live-streams/"+t,e)}},{key:"getKpi_TopStreamers",value:function(){var t={headers:new i.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(s+"/api/v1/dashboard/top-streamer",t)}},{key:"getdashboardData",value:function(t){var e=new i.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(s+"/api/v1/dashboard/total-revenuecount/"+t)}},{key:"getStreamerreport",value:function(){var t=new i.g;return t=t.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(s+"/pearl_to_money/update/")}},{key:"getViewerReports",value:function(){var t=new i.g;return t=t.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(s+"/pearl_to_money/update/")}},{key:"getTurnoverReport",value:function(){var t=new i.g;return t=t.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(s+"/api/v1/agent/agent-turnover/BQkBFzre77ZHk4OjzucJz6rYQ552")}},{key:"getStreamerInfo",value:function(){return this.http.get(s+"/api/v1/dashboard/streamer-infolist/"+sessionStorage.getItem("userToken"))}},{key:"getStreamerLocation",value:function(){return this.http.get(s+"/api/v1/dashboard/streamer-location/"+sessionStorage.getItem("userToken"))}},{key:"getViewerLocation",value:function(){return this.http.get(s+"/api/v1/dashboard/viewer-location/"+sessionStorage.getItem("userToken"))}},{key:"approveAgent",value:function(t){var e=new i.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(s+"/api/v1/user/secure/stream-AgentApprove",t)}},{key:"rejectAgent",value:function(t){var e=new i.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(s+"/api/v1/user/secure/stream-AgentApprove",t)}},{key:"acceptRejectStreamer",value:function(t){var e=new i.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(s+"/api/v1/agent/accept-streamer",t)}},{key:"agentWithDrawSubmit",value:function(t){var e=new i.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(s+"/api/v1/withdrawble/withdraw-submit",t)}}]),e}();return e.\u0275prov=r["\u0275\u0275defineInjectable"]({factory:function(){return new e(r["\u0275\u0275inject"](i.c))},token:e,providedIn:"root"}),e}()},"K+Kt":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(){function t(t){this.el=t,this.dtOptions={}}return t.prototype.ngOnInit=function(){var t=this;this.dtTrigger?this.dtTrigger.subscribe((function(){t.displayTable()})):this.displayTable()},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(){var t=this;this.dtInstance=new Promise((function(e,n){Promise.resolve(t.dtOptions).then((function(n){setTimeout((function(){t.dt=$(t.el.nativeElement).DataTable(n),e(t.dt)}))}))}))},t}()},axVG:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n("K+Kt");var o=function(){function t(){}var e;return e=t,t.forRoot=function(){return{ngModule:e}},t}()}}])}();