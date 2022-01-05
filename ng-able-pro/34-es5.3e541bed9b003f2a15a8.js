!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"H+bZ":function(n,o,l){"use strict";l.d(o,"a",(function(){return r}));var a=l("IheW"),i=l("8Y7J"),u="http://3.108.79.136:3000",r=function(){var n=function(){function n(t){e(this,n),this.http=t,this.notificationId="",this.announcementId="",this.crownId="",this.giftId=""}return t(n,[{key:"getGiftsData",value:function(e){return this.http.get(u+"/gifts")}},{key:"getGiftById",value:function(e){return this.http.get(u+"/gifts/"+e)}},{key:"deleteGift",value:function(e){var n={headers:new a.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(u+"/api/v1/gift/delete-gift/"+e,n)}},{key:"updateGift",value:function(e,n){var t={headers:new a.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(u+"/api/v1/gift/edit-gift",e,t)}},{key:"getCrownsList",value:function(e){return this.http.get(u+"/crowns")}},{key:"getCrownByID",value:function(e){return this.http.get(u+"/crowns/"+e)}},{key:"saveCrown",value:function(e){return this.http.post(u+"/crowns/add",e)}},{key:"updateCrown",value:function(e,n){return this.http.put(u+"/crowns/update/"+n,e)}},{key:"deleteCrown",value:function(e){var n={headers:new a.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.put(u+"/api/v1/admin/secure/delete/crown-value/"+e,{},n)}},{key:"getBonusDetails",value:function(){return this.http.get(u+"/bonus")}},{key:"updateBonus",value:function(e,n){return this.http.put(u+"/bonus/update/"+n,e)}},{key:"saveGift",value:function(e){var n={headers:new a.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(u+"/api/v1/gift/add-gift",e,n)}},{key:"getCrownToPearls",value:function(){return this.http.get(u+"/crown_to_pearl")}},{key:"getCrownToPearlsbyId",value:function(e){return this.http.get(u+"/crown_to_pearl/"+e)}},{key:"updateCrownToPearls",value:function(e,n){return this.http.put(u+"/crown_to_pearl/update/"+n,e)}},{key:"saveCrownToPearls",value:function(e){return this.http.post(u+"/crown_to_pearl/add",e)}},{key:"getEarningSetup",value:function(){return this.http.get(u+"/earning_setup")}},{key:"getEarningSetupId",value:function(e){return this.http.get(u+"/earning_setup/"+e)}},{key:"updateEarningSetup",value:function(e,n){return this.http.put(u+"/earning_setup/update/"+n,e)}},{key:"saveEarningSetup",value:function(e){return this.http.post(u+"/earning_setup/add",e)}},{key:"getNotification",value:function(){return this.http.get(u+"/notification")}},{key:"getNotificationById",value:function(e){return this.http.get(u+"/notification/"+e)}},{key:"updateNotification",value:function(e,n){return this.http.put(u+"/notification/update/"+n,e)}},{key:"saveNotification",value:function(e){return this.http.post(u+"/notification/add",e)}},{key:"getAnnouncement",value:function(){return this.http.get(u+"/announcement")}},{key:"getAnnouncementById",value:function(e){return this.http.get(u+"/announcement/"+e)}},{key:"updateAnnouncement",value:function(e,n){return this.http.put(u+"/announcement/update/"+n,e)}},{key:"saveAnnouncement",value:function(e){return this.http.post(u+"/announcement/add",e)}},{key:"addUser",value:function(e){var n={headers:new a.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(u+"/api/v1/admin/secure/add-user",e,n)}},{key:"fetchUsers",value:function(){return this.http.get(u+"/user")}},{key:"setCrown",value:function(e){var n={headers:new a.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(u+"/api/v1/admin/secure/set/crown-value",e,n)}},{key:"editCrown",value:function(e){var n={headers:new a.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.put(u+"/api/v1/admin/secure/crown-value",e,n)}},{key:"adminLogin",value:function(e){return this.http.post(u+"/api/v1/admin/login",e)}},{key:"addPearlToRm",value:function(e){return this.http.post(u+"/crown_to_pearl/add",e)}},{key:"addPearlToRmConvert",value:function(e){var n=new a.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(u+"/pearl_to_money/validate",e)}},{key:"editPeraltoRmConvert",value:function(e,n){var t=new a.g;return t=t.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(u+"/pearl_to_money/update/"+n,e)}},{key:"fetchStreamByType",value:function(e){var n={headers:new a.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(u+"/api/v1/admin/secure/live-streams/"+e,n)}},{key:"getKpi_TopStreamers",value:function(){var e={headers:new a.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(u+"/api/v1/dashboard/top-streamer",e)}},{key:"getdashboardData",value:function(e){var n=new a.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(u+"/api/v1/dashboard/total-revenuecount/"+e)}},{key:"getStreamerreport",value:function(){var e=new a.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(u+"/pearl_to_money/update/")}},{key:"getViewerReports",value:function(){var e=new a.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(u+"/pearl_to_money/update/")}},{key:"getTurnoverReport",value:function(){var e=new a.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(u+"/api/v1/agent/agent-turnover/BQkBFzre77ZHk4OjzucJz6rYQ552")}},{key:"getStreamerInfo",value:function(){return this.http.get(u+"/api/v1/dashboard/streamer-infolist/"+sessionStorage.getItem("userToken"))}},{key:"getStreamerLocation",value:function(){return this.http.get(u+"/api/v1/dashboard/streamer-location/"+sessionStorage.getItem("userToken"))}},{key:"getViewerLocation",value:function(){return this.http.get(u+"/api/v1/dashboard/viewer-location/"+sessionStorage.getItem("userToken"))}},{key:"approveAgent",value:function(e){var n=new a.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(u+"/api/v1/user/secure/stream-AgentApprove",e)}},{key:"rejectAgent",value:function(e){var n=new a.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(u+"/api/v1/user/secure/stream-AgentApprove",e)}},{key:"acceptRejectStreamer",value:function(e){var n=new a.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(u+"/api/v1/agent/accept-streamer",e)}},{key:"agentWithDrawSubmit",value:function(e){var n=new a.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(u+"/api/v1/withdrawble/withdraw-submit",e)}}]),n}();return n.\u0275prov=i["\u0275\u0275defineInjectable"]({factory:function(){return new n(i["\u0275\u0275inject"](a.c))},token:n,providedIn:"root"}),n}()},"K+Kt":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var o=function(){function e(e){this.el=e,this.dtOptions={}}return e.prototype.ngOnInit=function(){var e=this;this.dtTrigger?this.dtTrigger.subscribe((function(){e.displayTable()})):this.displayTable()},e.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},e.prototype.displayTable=function(){var e=this;this.dtInstance=new Promise((function(n,t){Promise.resolve(e.dtOptions).then((function(t){setTimeout((function(){e.dt=$(e.el.nativeElement).DataTable(t),n(e.dt)}))}))}))},e}()},Q733:function(n,o,l){"use strict";l.r(o),l.d(o,"VideosListModuleNgFactory",(function(){return O}));var a=l("8Y7J"),i=function(){function n(t,o){e(this,n),this.router=t,this.api=o,this.active=1,this.videoListTableOptions={}}return t(n,[{key:"ngOnInit",value:function(){this.lockbyPassword(),this.lockbyCrowns(),this.lockbyPublic()}},{key:"lockbyPassword",value:function(){this.api.fetchStreamByType("privatepassword").subscribe((function(e){console.log(e)}))}},{key:"lockbyCrowns",value:function(){this.api.fetchStreamByType("privatecrowns").subscribe((function(e){console.log(e)}))}},{key:"lockbyPublic",value:function(){this.api.fetchStreamByType("public").subscribe((function(e){console.log(e)}))}},{key:"gotoUserDetails",value:function(e){this.router.navigate(["/users/view",e.id])}},{key:"gotoVideoDetails",value:function(e){this.router.navigate(["/videos/list",e.id])}}]),n}(),u=function n(){e(this,n)},r=l("pMnS"),s=l("rMcs"),d=l("W8s6"),c=l("9AJC"),v=l("G0yt"),p=l("SVse"),m=l("iInd"),g=l("H+bZ"),h=a["\u0275crt"]({encapsulation:0,styles:[[".btn-smal[_ngcontent-%COMP%]{display:inline-block;line-height:1;font-weight:600;background:#4680ff;color:#fff;padding:.1875rem .3125rem;border-radius:2px;white-space:nowrap;font-size:11px;margin:0 4px}"]],data:{}});function f(e){return a["\u0275vid"](0,[(e()(),a["\u0275and"](0,null,null,0))],null,null)}function k(e){return a["\u0275vid"](0,[(e()(),a["\u0275and"](0,null,null,0))],null,null)}function y(e){return a["\u0275vid"](0,[(e()(),a["\u0275and"](0,null,null,0))],null,null)}function b(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,35,"div",[["class","row"]],null,null,null,null,null)),(e()(),a["\u0275eld"](1,0,null,null,34,"div",[["class","col-xl-12 col-sm-12"]],null,null,null,null,null)),(e()(),a["\u0275eld"](2,0,null,null,33,"div",[["class","card"]],null,null,null,null,null)),(e()(),a["\u0275eld"](3,0,null,null,32,"div",[["class","card-body"]],null,null,null,null,null)),(e()(),a["\u0275eld"](4,0,null,null,31,"div",[["class","row mt-3 mb-3"]],null,null,null,null,null)),(e()(),a["\u0275eld"](5,0,null,null,30,"div",[["class","col-sm-12"]],null,null,null,null,null)),(e()(),a["\u0275eld"](6,0,null,null,27,"ul",[["class","nav-tabs custom-nav"],["ngbNav",""]],[[2,"nav",null],[2,"flex-column",null],[1,"aria-orientation",0],[1,"role",0]],[[null,"activeIdChange"],[null,"keydown.arrowLeft"],[null,"keydown.arrowRight"],[null,"keydown.arrowDown"],[null,"keydown.arrowUp"],[null,"keydown.Home"],[null,"keydown.End"]],(function(e,n,t){var o=!0,l=e.component;return"keydown.arrowLeft"===n&&(o=!1!==a["\u0275nov"](e,7).onKeyDown(t)&&o),"keydown.arrowRight"===n&&(o=!1!==a["\u0275nov"](e,7).onKeyDown(t)&&o),"keydown.arrowDown"===n&&(o=!1!==a["\u0275nov"](e,7).onKeyDown(t)&&o),"keydown.arrowUp"===n&&(o=!1!==a["\u0275nov"](e,7).onKeyDown(t)&&o),"keydown.Home"===n&&(o=!1!==a["\u0275nov"](e,7).onKeyDown(t)&&o),"keydown.End"===n&&(o=!1!==a["\u0275nov"](e,7).onKeyDown(t)&&o),"activeIdChange"===n&&(o=!1!==(l.active=t)&&o),o}),null,null)),a["\u0275did"](7,1064960,[["nav",4]],2,v.G,[[8,null],v.H,a.ChangeDetectorRef,p.DOCUMENT],{activeId:[0,"activeId"]},{activeIdChange:"activeIdChange"}),a["\u0275qud"](603979776,1,{items:1}),a["\u0275qud"](603979776,2,{links:1}),(e()(),a["\u0275eld"](10,0,null,null,7,"li",[],[[2,"nav-item",null]],null,null,null,null)),a["\u0275did"](11,2179072,[[1,4]],1,v.J,[v.G,a.ElementRef],{_id:[0,"_id"]},null),a["\u0275qud"](603979776,3,{contentTpls:1}),(e()(),a["\u0275eld"](13,0,null,null,2,"a",[["href",""],["ngbNavLink",""]],[[8,"id",0],[2,"nav-link",null],[2,"nav-item",null],[1,"role",0],[2,"active",null],[2,"disabled",null],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-disabled",0]],[[null,"click"]],(function(e,n,t){var o=!0;return"click"===n&&(a["\u0275nov"](e,14).nav.click(a["\u0275nov"](e,14).navItem),o=!1!==t.preventDefault()&&o),o}),null,null)),a["\u0275did"](14,16384,[[2,4]],0,v.K,[[8,null],v.J,v.G,a.ElementRef],null,null),(e()(),a["\u0275ted"](-1,null,["Lock by Password"])),(e()(),a["\u0275and"](0,null,null,1,null,f)),a["\u0275did"](17,16384,[[3,4]],0,v.I,[a.TemplateRef],null,null),(e()(),a["\u0275eld"](18,0,null,null,7,"li",[],[[2,"nav-item",null]],null,null,null,null)),a["\u0275did"](19,2179072,[[1,4]],1,v.J,[v.G,a.ElementRef],{_id:[0,"_id"]},null),a["\u0275qud"](603979776,4,{contentTpls:1}),(e()(),a["\u0275eld"](21,0,null,null,2,"a",[["href",""],["ngbNavLink",""]],[[8,"id",0],[2,"nav-link",null],[2,"nav-item",null],[1,"role",0],[2,"active",null],[2,"disabled",null],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-disabled",0]],[[null,"click"]],(function(e,n,t){var o=!0;return"click"===n&&(a["\u0275nov"](e,22).nav.click(a["\u0275nov"](e,22).navItem),o=!1!==t.preventDefault()&&o),o}),null,null)),a["\u0275did"](22,16384,[[2,4]],0,v.K,[[8,null],v.J,v.G,a.ElementRef],null,null),(e()(),a["\u0275ted"](-1,null,["Lock by Crowns"])),(e()(),a["\u0275and"](0,null,null,1,null,k)),a["\u0275did"](25,16384,[[4,4]],0,v.I,[a.TemplateRef],null,null),(e()(),a["\u0275eld"](26,0,null,null,7,"li",[],[[2,"nav-item",null]],null,null,null,null)),a["\u0275did"](27,2179072,[[1,4]],1,v.J,[v.G,a.ElementRef],{_id:[0,"_id"]},null),a["\u0275qud"](603979776,5,{contentTpls:1}),(e()(),a["\u0275eld"](29,0,null,null,2,"a",[["href",""],["ngbNavLink",""]],[[8,"id",0],[2,"nav-link",null],[2,"nav-item",null],[1,"role",0],[2,"active",null],[2,"disabled",null],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-disabled",0]],[[null,"click"]],(function(e,n,t){var o=!0;return"click"===n&&(a["\u0275nov"](e,30).nav.click(a["\u0275nov"](e,30).navItem),o=!1!==t.preventDefault()&&o),o}),null,null)),a["\u0275did"](30,16384,[[2,4]],0,v.K,[[8,null],v.J,v.G,a.ElementRef],null,null),(e()(),a["\u0275ted"](-1,null,["Lock by Public"])),(e()(),a["\u0275and"](0,null,null,1,null,y)),a["\u0275did"](33,16384,[[5,4]],0,v.I,[a.TemplateRef],null,null),(e()(),a["\u0275eld"](34,0,null,null,1,"div",[["class","mt-2"]],[[2,"tab-content",null]],null,null,c.g,c.d)),a["\u0275did"](35,49152,null,0,v.M,[],{nav:[0,"nav"]},null)],(function(e,n){e(n,7,0,n.component.active),e(n,11,0,1),e(n,19,0,2),e(n,27,0,3),e(n,35,0,a["\u0275nov"](n,7))}),(function(e,n){e(n,6,0,!0,"vertical"===a["\u0275nov"](n,7).orientation,"vertical"===a["\u0275nov"](n,7).orientation&&"tablist"===a["\u0275nov"](n,7).roles?"vertical":void 0,a["\u0275nov"](n,7).role?a["\u0275nov"](n,7).role:a["\u0275nov"](n,7).roles?"tablist":void 0),e(n,10,0,!0),e(n,13,0,a["\u0275nov"](n,14).navItem.domId,!0,a["\u0275nov"](n,14).hasNavItemClass(),a["\u0275nov"](n,14).role?a["\u0275nov"](n,14).role:a["\u0275nov"](n,14).nav.roles?"tab":void 0,a["\u0275nov"](n,14).navItem.active,a["\u0275nov"](n,14).navItem.disabled,a["\u0275nov"](n,14).navItem.disabled?-1:void 0,a["\u0275nov"](n,14).navItem.isPanelInDom()?a["\u0275nov"](n,14).navItem.panelDomId:null,a["\u0275nov"](n,14).navItem.active,a["\u0275nov"](n,14).navItem.disabled),e(n,18,0,!0),e(n,21,0,a["\u0275nov"](n,22).navItem.domId,!0,a["\u0275nov"](n,22).hasNavItemClass(),a["\u0275nov"](n,22).role?a["\u0275nov"](n,22).role:a["\u0275nov"](n,22).nav.roles?"tab":void 0,a["\u0275nov"](n,22).navItem.active,a["\u0275nov"](n,22).navItem.disabled,a["\u0275nov"](n,22).navItem.disabled?-1:void 0,a["\u0275nov"](n,22).navItem.isPanelInDom()?a["\u0275nov"](n,22).navItem.panelDomId:null,a["\u0275nov"](n,22).navItem.active,a["\u0275nov"](n,22).navItem.disabled),e(n,26,0,!0),e(n,29,0,a["\u0275nov"](n,30).navItem.domId,!0,a["\u0275nov"](n,30).hasNavItemClass(),a["\u0275nov"](n,30).role?a["\u0275nov"](n,30).role:a["\u0275nov"](n,30).nav.roles?"tab":void 0,a["\u0275nov"](n,30).navItem.active,a["\u0275nov"](n,30).navItem.disabled,a["\u0275nov"](n,30).navItem.disabled?-1:void 0,a["\u0275nov"](n,30).navItem.isPanelInDom()?a["\u0275nov"](n,30).navItem.panelDomId:null,a["\u0275nov"](n,30).navItem.active,a["\u0275nov"](n,30).navItem.disabled),e(n,34,0,!0)}))}var w=a["\u0275ccf"]("app-list",i,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"app-list",[],null,null,null,b,h)),a["\u0275did"](1,114688,null,0,i,[m.o,g.a],null,null)],(function(e,n){e(n,1,0)}),null)}),{},{},[]),I=l("s7LF"),T=l("luWi"),C=l("0NUV"),x=l("DoSW"),S=l("w2bA"),L=l("9OXH"),D=l("7oHd"),_=l("aLe/"),R=l("N4L5"),j=l("wcvO"),E=l("z0HF"),P=l("sIwa"),N=l("bxSN"),A=l("iAM3"),G=l("KLca"),K=l("ebz3"),M=l("axVG"),O=a["\u0275cmf"](u,[],(function(e){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,s.a,d.a,c.a,c.b,c.l,c.m,c.i,c.j,c.k,w]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[a.LOCALE_ID]),a["\u0275mpd"](4608,I.y,I.y,[]),a["\u0275mpd"](4608,I.e,I.e,[]),a["\u0275mpd"](4608,T.LightboxConfig,T.LightboxConfig,[]),a["\u0275mpd"](4608,C.LightboxEvent,C.LightboxEvent,[]),a["\u0275mpd"](4608,x.Lightbox,x.Lightbox,[a.ComponentFactoryResolver,a.Injector,a.ApplicationRef,T.LightboxConfig,C.LightboxEvent]),a["\u0275mpd"](4608,C.LightboxWindowRef,C.LightboxWindowRef,[]),a["\u0275mpd"](4608,v.C,v.C,[a.ComponentFactoryResolver,a.Injector,v.Db,v.D]),a["\u0275mpd"](4608,S.a,S.a,[]),a["\u0275mpd"](4608,L.a,L.a,[]),a["\u0275mpd"](4608,D.a,D.a,[]),a["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),a["\u0275mpd"](1073742336,_.d,_.d,[]),a["\u0275mpd"](1073742336,I.x,I.x,[]),a["\u0275mpd"](1073742336,I.j,I.j,[]),a["\u0275mpd"](1073742336,I.t,I.t,[]),a["\u0275mpd"](1073742336,R.a,R.a,[]),a["\u0275mpd"](1073742336,v.z,v.z,[]),a["\u0275mpd"](1073742336,j.a,j.a,[]),a["\u0275mpd"](1073742336,m.s,m.s,[[2,m.x],[2,m.o]]),a["\u0275mpd"](1073742336,E.a,E.a,[]),a["\u0275mpd"](1073742336,P.a,P.a,[]),a["\u0275mpd"](1073742336,N.ClickOutsideModule,N.ClickOutsideModule,[]),a["\u0275mpd"](1073742336,A.LightboxModule,A.LightboxModule,[]),a["\u0275mpd"](1073742336,v.c,v.c,[]),a["\u0275mpd"](1073742336,v.f,v.f,[]),a["\u0275mpd"](1073742336,v.h,v.h,[]),a["\u0275mpd"](1073742336,v.l,v.l,[]),a["\u0275mpd"](1073742336,v.n,v.n,[]),a["\u0275mpd"](1073742336,v.t,v.t,[]),a["\u0275mpd"](1073742336,v.E,v.E,[]),a["\u0275mpd"](1073742336,v.L,v.L,[]),a["\u0275mpd"](1073742336,v.Q,v.Q,[]),a["\u0275mpd"](1073742336,v.W,v.W,[]),a["\u0275mpd"](1073742336,v.Z,v.Z,[]),a["\u0275mpd"](1073742336,v.eb,v.eb,[]),a["\u0275mpd"](1073742336,v.ob,v.ob,[]),a["\u0275mpd"](1073742336,v.rb,v.rb,[]),a["\u0275mpd"](1073742336,v.sb,v.sb,[]),a["\u0275mpd"](1073742336,v.tb,v.tb,[]),a["\u0275mpd"](1073742336,v.jb,v.jb,[]),a["\u0275mpd"](1073742336,v.F,v.F,[]),a["\u0275mpd"](1073742336,G.a,G.a,[]),a["\u0275mpd"](1073742336,K.a,K.a,[]),a["\u0275mpd"](1073742336,M.a,M.a,[]),a["\u0275mpd"](1073742336,u,u,[]),a["\u0275mpd"](256,_.a,K.b,[]),a["\u0275mpd"](1024,m.m,(function(){return[[{path:"",component:i}]]}),[])])}))},axVG:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t("K+Kt");var o=function(){function e(){}var n;return n=e,e.forRoot=function(){return{ngModule:n}},e}()}}])}();