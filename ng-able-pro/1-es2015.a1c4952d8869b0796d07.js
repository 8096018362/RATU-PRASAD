(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"007U":function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return k}));var s=n("8Y7J"),i=n("zHaW"),a=(n("1O3W"),n("SVse")),o=(n("9gLZ"),n("1z/I")),r=(n("SCoL"),n("7KAL"),n("UhP/"),n("YEUz")),c=n("Dxy4"),l=n("1Xc+"),u=n("omvX"),h=s["\u0275crt"]({encapsulation:2,styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"],data:{animation:[{type:7,name:"state",definitions:[{type:0,name:"void, hidden",styles:{type:6,styles:{transform:"scale(0.8)",opacity:0},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{transform:"scale(1)",opacity:1},offset:null},options:void 0},{type:1,expr:"* => visible",animation:{type:4,styles:null,timings:"150ms cubic-bezier(0, 0, 0.2, 1)"},options:null},{type:1,expr:"* => void, * => hidden",animation:{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"75ms cubic-bezier(0.4, 0.0, 1, 1)"},options:null}],options:{}}]}});function p(t){return s["\u0275vid"](0,[(t()(),s["\u0275and"](0,null,null,0))],null,null)}function d(t){return s["\u0275vid"](0,[s["\u0275qud"](402653184,1,{_portalOutlet:0}),(t()(),s["\u0275and"](16777216,null,null,1,null,p)),s["\u0275did"](2,212992,[[1,4]],0,o.b,[s.ComponentFactoryResolver,s.ViewContainerRef,a.DOCUMENT],{portal:[0,"portal"]},null)],(function(t,e){t(e,2,0,"")}),null)}function m(t){return s["\u0275vid"](0,[(t()(),s["\u0275eld"](0,0,null,null,1,"snack-bar-container",[["class","mat-snack-bar-container"]],[[1,"role",0],[40,"@state",0]],[["component","@state.done"]],(function(t,e,n){var i=!0;return"component:@state.done"===e&&(i=!1!==s["\u0275nov"](t,1).onAnimationEnd(n)&&i),i}),d,h)),s["\u0275did"](1,180224,null,0,i.d,[s.NgZone,s.ElementRef,s.ChangeDetectorRef,i.c],null,null)],null,(function(t,e){t(e,0,0,s["\u0275nov"](e,1)._role,s["\u0275nov"](e,1)._animationState)}))}var g=s["\u0275ccf"]("snack-bar-container",i.d,m,{},{},[]),f=s["\u0275crt"]({encapsulation:2,styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"],data:{}});function _(t){return s["\u0275vid"](0,[(t()(),s["\u0275eld"](0,0,null,null,3,"div",[["class","mat-simple-snackbar-action"]],null,null,null,null,null)),(t()(),s["\u0275eld"](1,0,null,null,2,"button",[["class","mat-focus-indicator"],["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],[[null,"click"]],(function(t,e,n){var s=!0;return"click"===e&&(s=!1!==t.component.action()&&s),s}),l.b,l.a)),s["\u0275did"](2,4374528,null,0,c.b,[s.ElementRef,r.e,[2,u.a]],null,null),(t()(),s["\u0275ted"](3,0,["",""]))],null,(function(t,e){var n=e.component;t(e,1,0,s["\u0275nov"](e,2).disabled||null,"NoopAnimations"===s["\u0275nov"](e,2)._animationMode,s["\u0275nov"](e,2).disabled),t(e,3,0,n.data.action)}))}function b(t){return s["\u0275vid"](2,[(t()(),s["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),s["\u0275ted"](1,null,["",""])),(t()(),s["\u0275and"](16777216,null,null,1,null,_)),s["\u0275did"](3,16384,null,0,a.NgIf,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,e){t(e,3,0,e.component.hasAction)}),(function(t,e){t(e,1,0,e.component.data.message)}))}function v(t){return s["\u0275vid"](0,[(t()(),s["\u0275eld"](0,0,null,null,1,"simple-snack-bar",[["class","mat-simple-snackbar"]],null,null,null,b,f)),s["\u0275did"](1,49152,null,0,i.g,[i.f,i.a],null,null)],null,null)}var k=s["\u0275ccf"]("simple-snack-bar",i.g,v,{},{},[])},"H+bZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var s=n("IheW"),i=n("8Y7J");const a="http://3.108.79.136:3000";let o=(()=>{class t{constructor(t){this.http=t,this.notificationId="",this.announcementId="",this.crownId="",this.giftId=""}getGiftsData(t){return this.http.get(a+"/gifts")}getGiftById(t){return this.http.get(a+"/gifts/"+t)}deleteGift(t){const e={headers:new s.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(a+"/api/v1/gift/delete-gift/"+t,e)}updateGift(t,e){const n={headers:new s.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(a+"/api/v1/gift/edit-gift",t,n)}getCrownsList(t){return this.http.get(a+"/crowns")}getCrownByID(t){return this.http.get(a+"/crowns/"+t)}saveCrown(t){return this.http.post(a+"/crowns/add",t)}updateCrown(t,e){return this.http.put(a+"/crowns/update/"+e,t)}deleteCrown(t){const e={headers:new s.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.put(a+"/api/v1/admin/secure/delete/crown-value/"+t,{},e)}getBonusDetails(){return this.http.get(a+"/bonus")}updateBonus(t,e){return this.http.put(a+"/bonus/update/"+e,t)}saveGift(t){const e={headers:new s.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(a+"/api/v1/gift/add-gift",t,e)}getCrownToPearls(){return this.http.get(a+"/crown_to_pearl")}getCrownToPearlsbyId(t){return this.http.get(a+"/crown_to_pearl/"+t)}updateCrownToPearls(t,e){return this.http.put(a+"/crown_to_pearl/update/"+e,t)}saveCrownToPearls(t){return this.http.post(a+"/crown_to_pearl/add",t)}getEarningSetup(){return this.http.get(a+"/earning_setup")}getEarningSetupId(t){return this.http.get(a+"/earning_setup/"+t)}updateEarningSetup(t,e){return this.http.put(a+"/earning_setup/update/"+e,t)}saveEarningSetup(t){return this.http.post(a+"/earning_setup/add",t)}getNotification(){return this.http.get(a+"/notification")}getNotificationById(t){return this.http.get(a+"/notification/"+t)}updateNotification(t,e){return this.http.put(a+"/notification/update/"+e,t)}saveNotification(t){return this.http.post(a+"/notification/add",t)}getAnnouncement(){return this.http.get(a+"/announcement")}getAnnouncementById(t){return this.http.get(a+"/announcement/"+t)}updateAnnouncement(t,e){return this.http.put(a+"/announcement/update/"+e,t)}saveAnnouncement(t){return this.http.post(a+"/announcement/add",t)}addUser(t){const e={headers:new s.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(a+"/api/v1/admin/secure/add-user",t,e)}fetchUsers(){return this.http.get(a+"/user")}setCrown(t){const e={headers:new s.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(a+"/api/v1/admin/secure/set/crown-value",t,e)}editCrown(t){const e={headers:new s.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.put(a+"/api/v1/admin/secure/crown-value",t,e)}adminLogin(t){return this.http.post(a+"/api/v1/admin/login",t)}addPearlToRm(t){return this.http.post(a+"/crown_to_pearl/add",t)}addPearlToRmConvert(t){let e=new s.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/pearl_to_money/validate",t)}editPeraltoRmConvert(t,e){let n=new s.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/pearl_to_money/update/"+e,t)}fetchStreamByType(t){const e={headers:new s.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(a+"/api/v1/admin/secure/live-streams/"+t,e)}getKpi_TopStreamers(){const t={headers:new s.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(a+"/api/v1/dashboard/top-streamer",t)}getdashboardData(t){let e=new s.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(a+"/api/v1/dashboard/total-revenuecount/"+t)}getStreamerreport(){let t=new s.g;return t=t.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(a+"/pearl_to_money/update/")}getViewerReports(){let t=new s.g;return t=t.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(a+"/pearl_to_money/update/")}getTurnoverReport(){let t=new s.g;return t=t.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(a+"/api/v1/agent/agent-turnover/BQkBFzre77ZHk4OjzucJz6rYQ552")}getStreamerInfo(){return this.http.get(a+"/api/v1/dashboard/streamer-infolist/"+sessionStorage.getItem("userToken"))}getStreamerLocation(){return this.http.get(a+"/api/v1/dashboard/streamer-location/"+sessionStorage.getItem("userToken"))}getViewerLocation(){return this.http.get(a+"/api/v1/dashboard/viewer-location/"+sessionStorage.getItem("userToken"))}approveAgent(t){let e=new s.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/api/v1/user/secure/stream-AgentApprove",t)}rejectAgent(t){let e=new s.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/api/v1/user/secure/stream-AgentApprove",t)}acceptRejectStreamer(t){let e=new s.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/api/v1/agent/accept-streamer",t)}agentWithDrawSubmit(t){let e=new s.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(a+"/api/v1/withdrawble/withdraw-submit",t)}}return t.\u0275prov=i["\u0275\u0275defineInjectable"]({factory:function(){return new t(i["\u0275\u0275inject"](s.c))},token:t,providedIn:"root"}),t})()},zHaW:function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return C})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return A})),n.d(e,"f",(function(){return T})),n.d(e,"g",(function(){return B}));var s=n("1O3W"),i=n("1z/I"),a=n("8Y7J"),o=n("XNiG"),r=n("IzEk"),c=n("1G5W"),l=(n("GS7A"),n("YEUz")),u=n("8LU1"),h=n("itXk"),p=n("GyhO"),d=n("HDdC"),m=n("zP0r"),g=n("Kj3r"),f=n("lJxs"),_=n("JX91"),b=n("SCoL");const v=new Set;let k,w=(()=>{class t{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):y}matchMedia(t){return this._platform.WEBKIT&&function(t){if(!v.has(t))try{k||(k=document.createElement("style"),k.setAttribute("type","text/css"),document.head.appendChild(k)),k.sheet&&(k.sheet.insertRule(`@media ${t} {.fx-query-test{ }}`,0),v.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}return t.\u0275prov=Object(a["\u0275\u0275defineInjectable"])({factory:function(){return new t(Object(a["\u0275\u0275inject"])(b.a))},token:t,providedIn:"root"}),t})();function y(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}let S=(()=>{class t{constructor(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new o.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return j(Object(u.a)(t)).some(t=>this._registerQuery(t).mql.matches)}observe(t){const e=j(Object(u.a)(t)).map(t=>this._registerQuery(t).observable);let n=Object(h.b)(e);return n=Object(p.a)(n.pipe(Object(r.a)(1)),n.pipe(Object(m.a)(1),Object(g.a)(0))),n.pipe(Object(f.a)(t=>{const e={matches:!1,breakpoints:{}};return t.forEach(({matches:t,query:n})=>{e.matches=e.matches||t,e.breakpoints[n]=t}),e}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const e=this._mediaMatcher.matchMedia(t),n={observable:new d.a(t=>{const n=e=>this._zone.run(()=>t.next(e));return e.addListener(n),()=>{e.removeListener(n)}}).pipe(Object(_.a)(e),Object(f.a)(({matches:e})=>({query:t,matches:e})),Object(c.a)(this._destroySubject)),mql:e};return this._queries.set(t,n),n}}return t.\u0275prov=Object(a["\u0275\u0275defineInjectable"])({factory:function(){return new t(Object(a["\u0275\u0275inject"])(w),Object(a["\u0275\u0275inject"])(a.NgZone))},token:t,providedIn:"root"}),t})();function j(t){return t.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}const x=new a.InjectionToken("MatSnackBarData");class C{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}const I=Math.pow(2,31)-1;class T{constructor(t,e){this._overlayRef=e,this._afterDismissed=new o.a,this._afterOpened=new o.a,this._onAction=new o.a,this._dismissedByAction=!1,this.containerInstance=t,this.onAction().subscribe(()=>this.dismiss()),t._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete())}closeWithAction(){this.dismissWithAction()}_dismissAfter(t){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(t,I))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}class B{constructor(t,e){this.snackBarRef=t,this.data=e}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}class O extends i.a{constructor(t,e,n,s){super(),this._ngZone=t,this._elementRef=e,this._changeDetectorRef=n,this.snackBarConfig=s,this._destroyed=!1,this._onExit=new o.a,this._onEnter=new o.a,this._animationState="void",this.attachDomPortal=t=>(this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachDomPortal(t)),this._role="assertive"!==s.politeness||s.announcementMessage?"off"===s.politeness?null:"status":"alert"}attachComponentPortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachTemplatePortal(t)}onAnimationEnd(t){const{fromState:e,toState:n}=t;if(("void"===n&&"void"!==e||"hidden"===n)&&this._completeExit(),"visible"===n){const t=this._onEnter;this._ngZone.run(()=>{t.next(),t.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())}exit(){return this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),this._onExit}ngOnDestroy(){this._destroyed=!0,this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.pipe(Object(r.a)(1)).subscribe(()=>{this._onExit.next(),this._onExit.complete()})}_applySnackBarClasses(){const t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(e=>t.classList.add(e)):t.classList.add(e)),"center"===this.snackBarConfig.horizontalPosition&&t.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&t.classList.add("mat-snack-bar-top")}_assertNotAttached(){this._portalOutlet.hasAttached()}}class A{}const R=new a.InjectionToken("mat-snack-bar-default-options",{providedIn:"root",factory:function(){return new C}});let E=(()=>{class t{constructor(t,e,n,s,i,a){this._overlay=t,this._live=e,this._injector=n,this._breakpointObserver=s,this._parentSnackBar=i,this._defaultConfig=a,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=B,this.snackBarContainerComponent=O,this.handsetCssClass="mat-snack-bar-handset"}get _openedSnackBarRef(){const t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){const s=Object.assign(Object.assign({},this._defaultConfig),n);return s.data={message:t,action:e},s.announcementMessage===t&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){const n=a.Injector.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:C,useValue:e}]}),s=new i.c(this.snackBarContainerComponent,e.viewContainerRef,n),o=t.attach(s);return o.instance.snackBarConfig=e,o.instance}_attach(t,e){const n=Object.assign(Object.assign(Object.assign({},new C),this._defaultConfig),e),s=this._createOverlay(n),o=this._attachSnackBarContainer(s,n),r=new T(o,s);if(t instanceof a.TemplateRef){const e=new i.f(t,null,{$implicit:n.data,snackBarRef:r});r.instance=o.attachTemplatePortal(e)}else{const e=this._createInjector(n,r),s=new i.c(t,void 0,e),a=o.attachComponentPortal(s);r.instance=a.instance}return this._breakpointObserver.observe("(max-width: 599.99px) and (orientation: portrait)").pipe(Object(c.a)(s.detachments())).subscribe(t=>{const e=s.overlayElement.classList;t.matches?e.add(this.handsetCssClass):e.remove(this.handsetCssClass)}),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),e.announcementMessage&&this._live.announce(e.announcementMessage,e.politeness)}_createOverlay(t){const e=new s.b;e.direction=t.direction;let n=this._overlay.position().global();const i="rtl"===t.direction,a="left"===t.horizontalPosition||"start"===t.horizontalPosition&&!i||"end"===t.horizontalPosition&&i,o=!a&&"center"!==t.horizontalPosition;return a?n.left("0"):o?n.right("0"):n.centerHorizontally(),"top"===t.verticalPosition?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)}_createInjector(t,e){return a.Injector.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:T,useValue:e},{provide:x,useValue:t.data}]})}}return t.\u0275prov=Object(a["\u0275\u0275defineInjectable"])({factory:function(){return new t(Object(a["\u0275\u0275inject"])(s.a),Object(a["\u0275\u0275inject"])(l.h),Object(a["\u0275\u0275inject"])(a.INJECTOR),Object(a["\u0275\u0275inject"])(S),Object(a["\u0275\u0275inject"])(t,12),Object(a["\u0275\u0275inject"])(R))},token:t,providedIn:A}),t})()},zP0r:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var s=n("7o/Q");function i(t){return e=>e.lift(new a(t))}class a{constructor(t){this.total=t}call(t,e){return e.subscribe(new o(t,this.total))}}class o extends s.a{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){++this.count>this.total&&this.destination.next(t)}}}}]);