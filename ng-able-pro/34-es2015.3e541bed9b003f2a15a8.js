(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"H+bZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("IheW"),l=n("8Y7J");const a="http://3.108.79.136:3000";let i=(()=>{class t{constructor(t){this.http=t,this.notificationId="",this.announcementId="",this.crownId="",this.giftId=""}getGiftsData(t){return this.http.get(a+"/gifts")}getGiftById(t){return this.http.get(a+"/gifts/"+t)}deleteGift(t){const e={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(a+"/api/v1/gift/delete-gift/"+t,e)}updateGift(t,e){const n={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(a+"/api/v1/gift/edit-gift",t,n)}getCrownsList(t){return this.http.get(a+"/crowns")}getCrownByID(t){return this.http.get(a+"/crowns/"+t)}saveCrown(t){return this.http.post(a+"/crowns/add",t)}updateCrown(t,e){return this.http.put(a+"/crowns/update/"+e,t)}deleteCrown(t){const e={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.put(a+"/api/v1/admin/secure/delete/crown-value/"+t,{},e)}getBonusDetails(){return this.http.get(a+"/bonus")}updateBonus(t,e){return this.http.put(a+"/bonus/update/"+e,t)}saveGift(t){const e={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(a+"/api/v1/gift/add-gift",t,e)}getCrownToPearls(){return this.http.get(a+"/crown_to_pearl")}getCrownToPearlsbyId(t){return this.http.get(a+"/crown_to_pearl/"+t)}updateCrownToPearls(t,e){return this.http.put(a+"/crown_to_pearl/update/"+e,t)}saveCrownToPearls(t){return this.http.post(a+"/crown_to_pearl/add",t)}getEarningSetup(){return this.http.get(a+"/earning_setup")}getEarningSetupId(t){return this.http.get(a+"/earning_setup/"+t)}updateEarningSetup(t,e){return this.http.put(a+"/earning_setup/update/"+e,t)}saveEarningSetup(t){return this.http.post(a+"/earning_setup/add",t)}getNotification(){return this.http.get(a+"/notification")}getNotificationById(t){return this.http.get(a+"/notification/"+t)}updateNotification(t,e){return this.http.put(a+"/notification/update/"+e,t)}saveNotification(t){return this.http.post(a+"/notification/add",t)}getAnnouncement(){return this.http.get(a+"/announcement")}getAnnouncementById(t){return this.http.get(a+"/announcement/"+t)}updateAnnouncement(t,e){return this.http.put(a+"/announcement/update/"+e,t)}saveAnnouncement(t){return this.http.post(a+"/announcement/add",t)}addUser(t){const e={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(a+"/api/v1/admin/secure/add-user",t,e)}fetchUsers(){return this.http.get(a+"/user")}setCrown(t){const e={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(a+"/api/v1/admin/secure/set/crown-value",t,e)}editCrown(t){const e={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.put(a+"/api/v1/admin/secure/crown-value",t,e)}adminLogin(t){return this.http.post(a+"/api/v1/admin/login",t)}addPearlToRm(t){return this.http.post(a+"/crown_to_pearl/add",t)}addPearlToRmConvert(t){let e=new o.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/pearl_to_money/validate",t)}editPeraltoRmConvert(t,e){let n=new o.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/pearl_to_money/update/"+e,t)}fetchStreamByType(t){const e={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(a+"/api/v1/admin/secure/live-streams/"+t,e)}getKpi_TopStreamers(){const t={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(a+"/api/v1/dashboard/top-streamer",t)}getdashboardData(t){let e=new o.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(a+"/api/v1/dashboard/total-revenuecount/"+t)}getStreamerreport(){let t=new o.g;return t=t.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(a+"/pearl_to_money/update/")}getViewerReports(){let t=new o.g;return t=t.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(a+"/pearl_to_money/update/")}getTurnoverReport(){let t=new o.g;return t=t.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(a+"/api/v1/agent/agent-turnover/BQkBFzre77ZHk4OjzucJz6rYQ552")}getStreamerInfo(){return this.http.get(a+"/api/v1/dashboard/streamer-infolist/"+sessionStorage.getItem("userToken"))}getStreamerLocation(){return this.http.get(a+"/api/v1/dashboard/streamer-location/"+sessionStorage.getItem("userToken"))}getViewerLocation(){return this.http.get(a+"/api/v1/dashboard/viewer-location/"+sessionStorage.getItem("userToken"))}approveAgent(t){let e=new o.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/api/v1/user/secure/stream-AgentApprove",t)}rejectAgent(t){let e=new o.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/api/v1/user/secure/stream-AgentApprove",t)}acceptRejectStreamer(t){let e=new o.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/api/v1/agent/accept-streamer",t)}agentWithDrawSubmit(t){let e=new o.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/api/v1/withdrawble/withdraw-submit",t)}}return t.\u0275prov=l["\u0275\u0275defineInjectable"]({factory:function(){return new t(l["\u0275\u0275inject"](o.c))},token:t,providedIn:"root"}),t})()},"K+Kt":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(){function t(t){this.el=t,this.dtOptions={}}return t.prototype.ngOnInit=function(){var t=this;this.dtTrigger?this.dtTrigger.subscribe((function(){t.displayTable()})):this.displayTable()},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(){var t=this;this.dtInstance=new Promise((function(e,n){Promise.resolve(t.dtOptions).then((function(n){setTimeout((function(){t.dt=$(t.el.nativeElement).DataTable(n),e(t.dt)}))}))}))},t}()},Q733:function(t,e,n){"use strict";n.r(e),n.d(e,"VideosListModuleNgFactory",(function(){return M}));var o=n("8Y7J");class l{constructor(t,e){this.router=t,this.api=e,this.active=1,this.videoListTableOptions={}}ngOnInit(){this.lockbyPassword(),this.lockbyCrowns(),this.lockbyPublic()}lockbyPassword(){this.api.fetchStreamByType("privatepassword").subscribe(t=>{console.log(t)})}lockbyCrowns(){this.api.fetchStreamByType("privatecrowns").subscribe(t=>{console.log(t)})}lockbyPublic(){this.api.fetchStreamByType("public").subscribe(t=>{console.log(t)})}gotoUserDetails(t){this.router.navigate(["/users/view",t.id])}gotoVideoDetails(t){this.router.navigate(["/videos/list",t.id])}}class a{}var i=n("pMnS"),s=n("rMcs"),r=n("W8s6"),u=n("9AJC"),d=n("G0yt"),p=n("SVse"),c=n("iInd"),v=n("H+bZ"),m=o["\u0275crt"]({encapsulation:0,styles:[[".btn-smal[_ngcontent-%COMP%]{display:inline-block;line-height:1;font-weight:600;background:#4680ff;color:#fff;padding:.1875rem .3125rem;border-radius:2px;white-space:nowrap;font-size:11px;margin:0 4px}"]],data:{}});function g(t){return o["\u0275vid"](0,[(t()(),o["\u0275and"](0,null,null,0))],null,null)}function h(t){return o["\u0275vid"](0,[(t()(),o["\u0275and"](0,null,null,0))],null,null)}function b(t){return o["\u0275vid"](0,[(t()(),o["\u0275and"](0,null,null,0))],null,null)}function w(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,35,"div",[["class","row"]],null,null,null,null,null)),(t()(),o["\u0275eld"](1,0,null,null,34,"div",[["class","col-xl-12 col-sm-12"]],null,null,null,null,null)),(t()(),o["\u0275eld"](2,0,null,null,33,"div",[["class","card"]],null,null,null,null,null)),(t()(),o["\u0275eld"](3,0,null,null,32,"div",[["class","card-body"]],null,null,null,null,null)),(t()(),o["\u0275eld"](4,0,null,null,31,"div",[["class","row mt-3 mb-3"]],null,null,null,null,null)),(t()(),o["\u0275eld"](5,0,null,null,30,"div",[["class","col-sm-12"]],null,null,null,null,null)),(t()(),o["\u0275eld"](6,0,null,null,27,"ul",[["class","nav-tabs custom-nav"],["ngbNav",""]],[[2,"nav",null],[2,"flex-column",null],[1,"aria-orientation",0],[1,"role",0]],[[null,"activeIdChange"],[null,"keydown.arrowLeft"],[null,"keydown.arrowRight"],[null,"keydown.arrowDown"],[null,"keydown.arrowUp"],[null,"keydown.Home"],[null,"keydown.End"]],(function(t,e,n){var l=!0,a=t.component;return"keydown.arrowLeft"===e&&(l=!1!==o["\u0275nov"](t,7).onKeyDown(n)&&l),"keydown.arrowRight"===e&&(l=!1!==o["\u0275nov"](t,7).onKeyDown(n)&&l),"keydown.arrowDown"===e&&(l=!1!==o["\u0275nov"](t,7).onKeyDown(n)&&l),"keydown.arrowUp"===e&&(l=!1!==o["\u0275nov"](t,7).onKeyDown(n)&&l),"keydown.Home"===e&&(l=!1!==o["\u0275nov"](t,7).onKeyDown(n)&&l),"keydown.End"===e&&(l=!1!==o["\u0275nov"](t,7).onKeyDown(n)&&l),"activeIdChange"===e&&(l=!1!==(a.active=n)&&l),l}),null,null)),o["\u0275did"](7,1064960,[["nav",4]],2,d.G,[[8,null],d.H,o.ChangeDetectorRef,p.DOCUMENT],{activeId:[0,"activeId"]},{activeIdChange:"activeIdChange"}),o["\u0275qud"](603979776,1,{items:1}),o["\u0275qud"](603979776,2,{links:1}),(t()(),o["\u0275eld"](10,0,null,null,7,"li",[],[[2,"nav-item",null]],null,null,null,null)),o["\u0275did"](11,2179072,[[1,4]],1,d.J,[d.G,o.ElementRef],{_id:[0,"_id"]},null),o["\u0275qud"](603979776,3,{contentTpls:1}),(t()(),o["\u0275eld"](13,0,null,null,2,"a",[["href",""],["ngbNavLink",""]],[[8,"id",0],[2,"nav-link",null],[2,"nav-item",null],[1,"role",0],[2,"active",null],[2,"disabled",null],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-disabled",0]],[[null,"click"]],(function(t,e,n){var l=!0;return"click"===e&&(o["\u0275nov"](t,14).nav.click(o["\u0275nov"](t,14).navItem),l=!1!==n.preventDefault()&&l),l}),null,null)),o["\u0275did"](14,16384,[[2,4]],0,d.K,[[8,null],d.J,d.G,o.ElementRef],null,null),(t()(),o["\u0275ted"](-1,null,["Lock by Password"])),(t()(),o["\u0275and"](0,null,null,1,null,g)),o["\u0275did"](17,16384,[[3,4]],0,d.I,[o.TemplateRef],null,null),(t()(),o["\u0275eld"](18,0,null,null,7,"li",[],[[2,"nav-item",null]],null,null,null,null)),o["\u0275did"](19,2179072,[[1,4]],1,d.J,[d.G,o.ElementRef],{_id:[0,"_id"]},null),o["\u0275qud"](603979776,4,{contentTpls:1}),(t()(),o["\u0275eld"](21,0,null,null,2,"a",[["href",""],["ngbNavLink",""]],[[8,"id",0],[2,"nav-link",null],[2,"nav-item",null],[1,"role",0],[2,"active",null],[2,"disabled",null],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-disabled",0]],[[null,"click"]],(function(t,e,n){var l=!0;return"click"===e&&(o["\u0275nov"](t,22).nav.click(o["\u0275nov"](t,22).navItem),l=!1!==n.preventDefault()&&l),l}),null,null)),o["\u0275did"](22,16384,[[2,4]],0,d.K,[[8,null],d.J,d.G,o.ElementRef],null,null),(t()(),o["\u0275ted"](-1,null,["Lock by Crowns"])),(t()(),o["\u0275and"](0,null,null,1,null,h)),o["\u0275did"](25,16384,[[4,4]],0,d.I,[o.TemplateRef],null,null),(t()(),o["\u0275eld"](26,0,null,null,7,"li",[],[[2,"nav-item",null]],null,null,null,null)),o["\u0275did"](27,2179072,[[1,4]],1,d.J,[d.G,o.ElementRef],{_id:[0,"_id"]},null),o["\u0275qud"](603979776,5,{contentTpls:1}),(t()(),o["\u0275eld"](29,0,null,null,2,"a",[["href",""],["ngbNavLink",""]],[[8,"id",0],[2,"nav-link",null],[2,"nav-item",null],[1,"role",0],[2,"active",null],[2,"disabled",null],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-disabled",0]],[[null,"click"]],(function(t,e,n){var l=!0;return"click"===e&&(o["\u0275nov"](t,30).nav.click(o["\u0275nov"](t,30).navItem),l=!1!==n.preventDefault()&&l),l}),null,null)),o["\u0275did"](30,16384,[[2,4]],0,d.K,[[8,null],d.J,d.G,o.ElementRef],null,null),(t()(),o["\u0275ted"](-1,null,["Lock by Public"])),(t()(),o["\u0275and"](0,null,null,1,null,b)),o["\u0275did"](33,16384,[[5,4]],0,d.I,[o.TemplateRef],null,null),(t()(),o["\u0275eld"](34,0,null,null,1,"div",[["class","mt-2"]],[[2,"tab-content",null]],null,null,u.g,u.d)),o["\u0275did"](35,49152,null,0,d.M,[],{nav:[0,"nav"]},null)],(function(t,e){t(e,7,0,e.component.active),t(e,11,0,1),t(e,19,0,2),t(e,27,0,3),t(e,35,0,o["\u0275nov"](e,7))}),(function(t,e){t(e,6,0,!0,"vertical"===o["\u0275nov"](e,7).orientation,"vertical"===o["\u0275nov"](e,7).orientation&&"tablist"===o["\u0275nov"](e,7).roles?"vertical":void 0,o["\u0275nov"](e,7).role?o["\u0275nov"](e,7).role:o["\u0275nov"](e,7).roles?"tablist":void 0),t(e,10,0,!0),t(e,13,0,o["\u0275nov"](e,14).navItem.domId,!0,o["\u0275nov"](e,14).hasNavItemClass(),o["\u0275nov"](e,14).role?o["\u0275nov"](e,14).role:o["\u0275nov"](e,14).nav.roles?"tab":void 0,o["\u0275nov"](e,14).navItem.active,o["\u0275nov"](e,14).navItem.disabled,o["\u0275nov"](e,14).navItem.disabled?-1:void 0,o["\u0275nov"](e,14).navItem.isPanelInDom()?o["\u0275nov"](e,14).navItem.panelDomId:null,o["\u0275nov"](e,14).navItem.active,o["\u0275nov"](e,14).navItem.disabled),t(e,18,0,!0),t(e,21,0,o["\u0275nov"](e,22).navItem.domId,!0,o["\u0275nov"](e,22).hasNavItemClass(),o["\u0275nov"](e,22).role?o["\u0275nov"](e,22).role:o["\u0275nov"](e,22).nav.roles?"tab":void 0,o["\u0275nov"](e,22).navItem.active,o["\u0275nov"](e,22).navItem.disabled,o["\u0275nov"](e,22).navItem.disabled?-1:void 0,o["\u0275nov"](e,22).navItem.isPanelInDom()?o["\u0275nov"](e,22).navItem.panelDomId:null,o["\u0275nov"](e,22).navItem.active,o["\u0275nov"](e,22).navItem.disabled),t(e,26,0,!0),t(e,29,0,o["\u0275nov"](e,30).navItem.domId,!0,o["\u0275nov"](e,30).hasNavItemClass(),o["\u0275nov"](e,30).role?o["\u0275nov"](e,30).role:o["\u0275nov"](e,30).nav.roles?"tab":void 0,o["\u0275nov"](e,30).navItem.active,o["\u0275nov"](e,30).navItem.disabled,o["\u0275nov"](e,30).navItem.disabled?-1:void 0,o["\u0275nov"](e,30).navItem.isPanelInDom()?o["\u0275nov"](e,30).navItem.panelDomId:null,o["\u0275nov"](e,30).navItem.active,o["\u0275nov"](e,30).navItem.disabled),t(e,34,0,!0)}))}function f(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"app-list",[],null,null,null,w,m)),o["\u0275did"](1,114688,null,0,l,[c.o,v.a],null,null)],(function(t,e){t(e,1,0)}),null)}var I=o["\u0275ccf"]("app-list",l,f,{},{},[]),k=n("s7LF"),y=n("luWi"),T=n("0NUV"),C=n("DoSW"),x=n("w2bA"),S=n("9OXH"),L=n("7oHd"),D=n("aLe/"),_=n("N4L5"),R=n("wcvO"),j=n("z0HF"),E=n("sIwa"),N=n("bxSN"),P=n("iAM3"),A=n("KLca"),G=n("ebz3"),K=n("axVG"),M=o["\u0275cmf"](a,[],(function(t){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,s.a,r.a,u.a,u.b,u.l,u.m,u.i,u.j,u.k,I]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[o.LOCALE_ID]),o["\u0275mpd"](4608,k.y,k.y,[]),o["\u0275mpd"](4608,k.e,k.e,[]),o["\u0275mpd"](4608,y.LightboxConfig,y.LightboxConfig,[]),o["\u0275mpd"](4608,T.LightboxEvent,T.LightboxEvent,[]),o["\u0275mpd"](4608,C.Lightbox,C.Lightbox,[o.ComponentFactoryResolver,o.Injector,o.ApplicationRef,y.LightboxConfig,T.LightboxEvent]),o["\u0275mpd"](4608,T.LightboxWindowRef,T.LightboxWindowRef,[]),o["\u0275mpd"](4608,d.C,d.C,[o.ComponentFactoryResolver,o.Injector,d.Db,d.D]),o["\u0275mpd"](4608,x.a,x.a,[]),o["\u0275mpd"](4608,S.a,S.a,[]),o["\u0275mpd"](4608,L.a,L.a,[]),o["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),o["\u0275mpd"](1073742336,D.d,D.d,[]),o["\u0275mpd"](1073742336,k.x,k.x,[]),o["\u0275mpd"](1073742336,k.j,k.j,[]),o["\u0275mpd"](1073742336,k.t,k.t,[]),o["\u0275mpd"](1073742336,_.a,_.a,[]),o["\u0275mpd"](1073742336,d.z,d.z,[]),o["\u0275mpd"](1073742336,R.a,R.a,[]),o["\u0275mpd"](1073742336,c.s,c.s,[[2,c.x],[2,c.o]]),o["\u0275mpd"](1073742336,j.a,j.a,[]),o["\u0275mpd"](1073742336,E.a,E.a,[]),o["\u0275mpd"](1073742336,N.ClickOutsideModule,N.ClickOutsideModule,[]),o["\u0275mpd"](1073742336,P.LightboxModule,P.LightboxModule,[]),o["\u0275mpd"](1073742336,d.c,d.c,[]),o["\u0275mpd"](1073742336,d.f,d.f,[]),o["\u0275mpd"](1073742336,d.h,d.h,[]),o["\u0275mpd"](1073742336,d.l,d.l,[]),o["\u0275mpd"](1073742336,d.n,d.n,[]),o["\u0275mpd"](1073742336,d.t,d.t,[]),o["\u0275mpd"](1073742336,d.E,d.E,[]),o["\u0275mpd"](1073742336,d.L,d.L,[]),o["\u0275mpd"](1073742336,d.Q,d.Q,[]),o["\u0275mpd"](1073742336,d.W,d.W,[]),o["\u0275mpd"](1073742336,d.Z,d.Z,[]),o["\u0275mpd"](1073742336,d.eb,d.eb,[]),o["\u0275mpd"](1073742336,d.ob,d.ob,[]),o["\u0275mpd"](1073742336,d.rb,d.rb,[]),o["\u0275mpd"](1073742336,d.sb,d.sb,[]),o["\u0275mpd"](1073742336,d.tb,d.tb,[]),o["\u0275mpd"](1073742336,d.jb,d.jb,[]),o["\u0275mpd"](1073742336,d.F,d.F,[]),o["\u0275mpd"](1073742336,A.a,A.a,[]),o["\u0275mpd"](1073742336,G.a,G.a,[]),o["\u0275mpd"](1073742336,K.a,K.a,[]),o["\u0275mpd"](1073742336,a,a,[]),o["\u0275mpd"](256,D.a,G.b,[]),o["\u0275mpd"](1024,c.m,(function(){return[[{path:"",component:l}]]}),[])])}))},axVG:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n("K+Kt");var o=function(){function t(){}var e;return e=t,t.forRoot=function(){return{ngModule:e}},t}()}}]);