!function(){function l(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function n(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function e(l,e,t){return e&&n(l.prototype,e),t&&n(l,t),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"6GTG":function(n,t,u){"use strict";u.r(t),u.d(t,"WithdrawModuleNgFactory",(function(){return N}));var o=u("8Y7J"),a=function(){function n(e){l(this,n),this.appService=e,this.turnOverReport={}}return e(n,[{key:"ngOnInit",value:function(){this.isCollapsed=!0,this.multiCollapsed1=!0,this.multiCollapsed2=!0,this.getTurnoverReport()}},{key:"getTurnoverReport",value:function(){var l=this;this.appService.getTurnoverReport().subscribe((function(n){l.turnOverReport=n.data}))}},{key:"getPurchased",value:function(l){var n=0;return this.turnOverReport.transactionList.map((function(e){e.id==l.session_id&&(n+=e.amount?e.amount:0)})),n+" RM"}},{key:"getWithdraw",value:function(l){var n=0;return this.turnOverReport.withdrawList.map((function(e){e.id==l.session_id&&(n+=e.amount?e.amount:0)})),n+" RM"}}]),n}(),i=function n(){l(this,n)},s=u("pMnS"),r=u("rMcs"),d=u("W8s6"),c=u("9AJC"),p=u("SVse"),v=u("G0yt"),h=u("H+bZ"),g=o["\u0275crt"]({encapsulation:0,styles:[["h2[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{font-size:14px}"]],data:{}});function f(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,15,"div",[["class","row my-2 text-left"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["-"])),(l()(),o["\u0275eld"](3,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,1,"span",[["class","pl-3"]],null,null,null,null,null)),(l()(),o["\u0275ted"](5,null,["",""])),(l()(),o["\u0275eld"](6,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["-"])),(l()(),o["\u0275eld"](8,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](9,null,[""," | 25000 Crowns"])),(l()(),o["\u0275eld"](10,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](11,null,["",""])),(l()(),o["\u0275eld"](12,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](13,null,["",""])),(l()(),o["\u0275eld"](14,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["-"]))],null,(function(l,n){var e=n.component;l(n,5,0,n.parent.context.$implicit.user_name),l(n,9,0,e.getPurchased(n.parent.context.$implicit)),l(n,11,0,e.getWithdraw(n.parent.context.$implicit)),l(n,13,0,n.parent.context.$implicit.earned_pearls?n.parent.context.$implicit.earned_pearls:0)}))}function m(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,8,"div",[["class","row my-2 text-left"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,0,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,0,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,0,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](5,null,[""," RM | 1000 Crowns"])),(l()(),o["\u0275eld"](6,0,null,null,0,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](7,0,null,null,0,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](8,0,null,null,0,"div",[["class","col"]],null,null,null,null,null))],null,(function(l,n){l(n,5,0,n.context.$implicit.amount)}))}function w(l){return o["\u0275vid"](0,[(l()(),o["\u0275and"](16777216,null,null,1,null,m)),o["\u0275did"](1,278528,null,0,p.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["\u0275and"](0,null,null,0))],(function(l,n){l(n,1,0,n.component.turnOverReport.transactionList)}),null)}function y(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,12,"div",[],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,11,"ngb-accordion",[["activeIds","i"],["class","able-pro-accordion accordion"],["role","tablist"]],[[1,"aria-multiselectable",0]],null,null,c.f,c.c)),o["\u0275did"](2,2146304,null,1,v.a,[v.b],{activeIds:[0,"activeIds"],closeOtherPanels:[1,"closeOtherPanels"]},null),o["\u0275qud"](603979776,1,{panels:1}),(l()(),o["\u0275eld"](4,0,null,null,8,"ngb-panel",[["id","i"]],null,null,null,null,null)),o["\u0275did"](5,2113536,[[1,4]],3,v.R,[],{id:[0,"id"]},null),o["\u0275qud"](603979776,2,{titleTpls:1}),o["\u0275qud"](603979776,3,{headerTpls:1}),o["\u0275qud"](603979776,4,{contentTpls:1}),(l()(),o["\u0275and"](0,null,null,1,null,f)),o["\u0275did"](10,16384,[[2,4]],0,v.U,[o.TemplateRef],null,null),(l()(),o["\u0275and"](0,null,null,1,null,w)),o["\u0275did"](12,16384,[[4,4]],0,v.S,[o.TemplateRef],null,null)],(function(l,n){l(n,2,0,"i",!0),l(n,5,0,"i")}),(function(l,n){l(n,1,0,!o["\u0275nov"](n,2).closeOtherPanels)}))}function k(l){return o["\u0275vid"](0,[o["\u0275pid"](0,p.DecimalPipe,[o.LOCALE_ID]),(l()(),o["\u0275eld"](1,0,null,null,68,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,13,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,12,"div",[["class","card bg-c-red text-white widget-visitor-card"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,11,"div",[["class","card-body text-center"]],null,null,null,null,null)),(l()(),o["\u0275eld"](5,0,null,null,4,"h2",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](6,null,[""," "])),o["\u0275ppd"](7,2),(l()(),o["\u0275eld"](8,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Crowns"])),(l()(),o["\u0275eld"](10,0,null,null,3,"h4",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["52 "])),(l()(),o["\u0275eld"](12,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["RM"])),(l()(),o["\u0275eld"](14,0,null,null,1,"h5",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Total Earnings"])),(l()(),o["\u0275eld"](16,0,null,null,13,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](17,0,null,null,12,"div",[["class","card bg-c-yellow text-white widget-visitor-card"]],null,null,null,null,null)),(l()(),o["\u0275eld"](18,0,null,null,11,"div",[["class","card-body text-center"]],null,null,null,null,null)),(l()(),o["\u0275eld"](19,0,null,null,4,"h2",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](20,null,[""," "])),o["\u0275ppd"](21,2),(l()(),o["\u0275eld"](22,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Crowns"])),(l()(),o["\u0275eld"](24,0,null,null,3,"h4",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["52 "])),(l()(),o["\u0275eld"](26,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["RM"])),(l()(),o["\u0275eld"](28,0,null,null,1,"h5",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Total Bonus"])),(l()(),o["\u0275eld"](30,0,null,null,13,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](31,0,null,null,12,"div",[["class","card bg-c-blue text-white widget-visitor-card"]],null,null,null,null,null)),(l()(),o["\u0275eld"](32,0,null,null,11,"div",[["class","card-body text-center"]],null,null,null,null,null)),(l()(),o["\u0275eld"](33,0,null,null,4,"h2",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](34,null,[""," "])),o["\u0275ppd"](35,2),(l()(),o["\u0275eld"](36,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Pearls"])),(l()(),o["\u0275eld"](38,0,null,null,3,"h4",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["52 "])),(l()(),o["\u0275eld"](40,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["RM"])),(l()(),o["\u0275eld"](42,0,null,null,1,"h5",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Total Spent"])),(l()(),o["\u0275eld"](44,0,null,null,13,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](45,0,null,null,12,"div",[["class","card bg-c-red text-white widget-visitor-card"]],null,null,null,null,null)),(l()(),o["\u0275eld"](46,0,null,null,11,"div",[["class","card-body text-center"]],null,null,null,null,null)),(l()(),o["\u0275eld"](47,0,null,null,4,"h2",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](48,null,[""," "])),o["\u0275ppd"](49,2),(l()(),o["\u0275eld"](50,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Pearls"])),(l()(),o["\u0275eld"](52,0,null,null,3,"h4",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["52 "])),(l()(),o["\u0275eld"](54,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["RM"])),(l()(),o["\u0275eld"](56,0,null,null,1,"h5",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Total Withdrawal"])),(l()(),o["\u0275eld"](58,0,null,null,11,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](59,0,null,null,10,"div",[["class","card bg-c-green text-white widget-visitor-card"]],null,null,null,null,null)),(l()(),o["\u0275eld"](60,0,null,null,9,"div",[["class","card-body text-center"]],null,null,null,null,null)),(l()(),o["\u0275eld"](61,0,null,null,4,"h2",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](62,null,[""," "])),o["\u0275ppd"](63,2),(l()(),o["\u0275eld"](64,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["RM"])),(l()(),o["\u0275eld"](66,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),o["\u0275eld"](67,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](68,0,null,null,1,"h5",[["class","text-white"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Balance in Wallet"])),(l()(),o["\u0275eld"](70,0,null,null,18,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](71,0,null,null,17,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275eld"](72,0,null,null,14,"div",[["class","row text-left px-4 mb-2"]],null,null,null,null,null)),(l()(),o["\u0275eld"](73,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Date/Time"])),(l()(),o["\u0275eld"](75,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Streamer Name"])),(l()(),o["\u0275eld"](77,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Bonus"])),(l()(),o["\u0275eld"](79,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Purchased"])),(l()(),o["\u0275eld"](81,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Withdraw"])),(l()(),o["\u0275eld"](83,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Pearls Earned"])),(l()(),o["\u0275eld"](85,0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Wallet Balance (RM)"])),(l()(),o["\u0275and"](16777216,null,null,1,null,y)),o["\u0275did"](88,278528,null,0,p.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,88,0,n.component.turnOverReport.publisherList)}),(function(l,n){var e=n.component,t=o["\u0275unv"](n,6,0,l(n,7,0,o["\u0275nov"](n,0),e.turnOverReport.totalEarnings,"1.2-2"));l(n,6,0,t);var u=o["\u0275unv"](n,20,0,l(n,21,0,o["\u0275nov"](n,0),e.turnOverReport.totalBonus,"1.2-2"));l(n,20,0,u);var a=o["\u0275unv"](n,34,0,l(n,35,0,o["\u0275nov"](n,0),e.turnOverReport.totalSpent,"1.2-2"));l(n,34,0,a);var i=o["\u0275unv"](n,48,0,l(n,49,0,o["\u0275nov"](n,0),e.turnOverReport.totalWithdraw,"1.2-2"));l(n,48,0,i);var s=o["\u0275unv"](n,62,0,l(n,63,0,o["\u0275nov"](n,0),e.turnOverReport.walletBalance,"1.2-2"));l(n,62,0,s)}))}var b=o["\u0275ccf"]("app-withdraw",a,(function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-withdraw",[],null,null,null,k,g)),o["\u0275did"](1,114688,null,0,a,[h.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),x=u("s7LF"),T=u("luWi"),C=u("0NUV"),I=u("DoSW"),R=u("w2bA"),S=u("9OXH"),O=u("7oHd"),L=u("iInd"),_=u("aLe/"),M=u("N4L5"),j=u("wcvO"),P=u("z0HF"),F=u("sIwa"),W=u("bxSN"),A=u("iAM3"),D=u("KLca"),E=u("ebz3"),B=u("axVG"),N=o["\u0275cmf"](i,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,r.a,d.a,c.a,c.b,c.l,c.m,c.i,c.j,c.k,b]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[o.LOCALE_ID]),o["\u0275mpd"](4608,x.y,x.y,[]),o["\u0275mpd"](4608,x.e,x.e,[]),o["\u0275mpd"](4608,T.LightboxConfig,T.LightboxConfig,[]),o["\u0275mpd"](4608,C.LightboxEvent,C.LightboxEvent,[]),o["\u0275mpd"](4608,I.Lightbox,I.Lightbox,[o.ComponentFactoryResolver,o.Injector,o.ApplicationRef,T.LightboxConfig,C.LightboxEvent]),o["\u0275mpd"](4608,C.LightboxWindowRef,C.LightboxWindowRef,[]),o["\u0275mpd"](4608,v.C,v.C,[o.ComponentFactoryResolver,o.Injector,v.Db,v.D]),o["\u0275mpd"](4608,R.a,R.a,[]),o["\u0275mpd"](4608,S.a,S.a,[]),o["\u0275mpd"](4608,O.a,O.a,[]),o["\u0275mpd"](1073742336,L.s,L.s,[[2,L.x],[2,L.o]]),o["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),o["\u0275mpd"](1073742336,_.d,_.d,[]),o["\u0275mpd"](1073742336,x.x,x.x,[]),o["\u0275mpd"](1073742336,x.j,x.j,[]),o["\u0275mpd"](1073742336,x.t,x.t,[]),o["\u0275mpd"](1073742336,M.a,M.a,[]),o["\u0275mpd"](1073742336,v.z,v.z,[]),o["\u0275mpd"](1073742336,j.a,j.a,[]),o["\u0275mpd"](1073742336,P.a,P.a,[]),o["\u0275mpd"](1073742336,F.a,F.a,[]),o["\u0275mpd"](1073742336,W.ClickOutsideModule,W.ClickOutsideModule,[]),o["\u0275mpd"](1073742336,A.LightboxModule,A.LightboxModule,[]),o["\u0275mpd"](1073742336,v.c,v.c,[]),o["\u0275mpd"](1073742336,v.f,v.f,[]),o["\u0275mpd"](1073742336,v.h,v.h,[]),o["\u0275mpd"](1073742336,v.l,v.l,[]),o["\u0275mpd"](1073742336,v.n,v.n,[]),o["\u0275mpd"](1073742336,v.t,v.t,[]),o["\u0275mpd"](1073742336,v.E,v.E,[]),o["\u0275mpd"](1073742336,v.L,v.L,[]),o["\u0275mpd"](1073742336,v.Q,v.Q,[]),o["\u0275mpd"](1073742336,v.W,v.W,[]),o["\u0275mpd"](1073742336,v.Z,v.Z,[]),o["\u0275mpd"](1073742336,v.eb,v.eb,[]),o["\u0275mpd"](1073742336,v.ob,v.ob,[]),o["\u0275mpd"](1073742336,v.rb,v.rb,[]),o["\u0275mpd"](1073742336,v.sb,v.sb,[]),o["\u0275mpd"](1073742336,v.tb,v.tb,[]),o["\u0275mpd"](1073742336,v.jb,v.jb,[]),o["\u0275mpd"](1073742336,v.F,v.F,[]),o["\u0275mpd"](1073742336,D.a,D.a,[]),o["\u0275mpd"](1073742336,E.a,E.a,[]),o["\u0275mpd"](1073742336,B.a,B.a,[]),o["\u0275mpd"](1073742336,i,i,[]),o["\u0275mpd"](256,_.a,E.b,[]),o["\u0275mpd"](1024,L.m,(function(){return[[{path:"",component:a}]]}),[])])}))},"H+bZ":function(n,t,u){"use strict";u.d(t,"a",(function(){return s}));var o=u("IheW"),a=u("8Y7J"),i="http://3.108.79.136:3000",s=function(){var n=function(){function n(e){l(this,n),this.http=e,this.notificationId="",this.announcementId="",this.crownId="",this.giftId=""}return e(n,[{key:"getGiftsData",value:function(l){return this.http.get(i+"/gifts")}},{key:"getGiftById",value:function(l){return this.http.get(i+"/gifts/"+l)}},{key:"deleteGift",value:function(l){var n={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(i+"/api/v1/gift/delete-gift/"+l,n)}},{key:"updateGift",value:function(l,n){var e={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(i+"/api/v1/gift/edit-gift",l,e)}},{key:"getCrownsList",value:function(l){return this.http.get(i+"/crowns")}},{key:"getCrownByID",value:function(l){return this.http.get(i+"/crowns/"+l)}},{key:"saveCrown",value:function(l){return this.http.post(i+"/crowns/add",l)}},{key:"updateCrown",value:function(l,n){return this.http.put(i+"/crowns/update/"+n,l)}},{key:"deleteCrown",value:function(l){var n={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.put(i+"/api/v1/admin/secure/delete/crown-value/"+l,{},n)}},{key:"getBonusDetails",value:function(){return this.http.get(i+"/bonus")}},{key:"updateBonus",value:function(l,n){return this.http.put(i+"/bonus/update/"+n,l)}},{key:"saveGift",value:function(l){var n={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(i+"/api/v1/gift/add-gift",l,n)}},{key:"getCrownToPearls",value:function(){return this.http.get(i+"/crown_to_pearl")}},{key:"getCrownToPearlsbyId",value:function(l){return this.http.get(i+"/crown_to_pearl/"+l)}},{key:"updateCrownToPearls",value:function(l,n){return this.http.put(i+"/crown_to_pearl/update/"+n,l)}},{key:"saveCrownToPearls",value:function(l){return this.http.post(i+"/crown_to_pearl/add",l)}},{key:"getEarningSetup",value:function(){return this.http.get(i+"/earning_setup")}},{key:"getEarningSetupId",value:function(l){return this.http.get(i+"/earning_setup/"+l)}},{key:"updateEarningSetup",value:function(l,n){return this.http.put(i+"/earning_setup/update/"+n,l)}},{key:"saveEarningSetup",value:function(l){return this.http.post(i+"/earning_setup/add",l)}},{key:"getNotification",value:function(){return this.http.get(i+"/notification")}},{key:"getNotificationById",value:function(l){return this.http.get(i+"/notification/"+l)}},{key:"updateNotification",value:function(l,n){return this.http.put(i+"/notification/update/"+n,l)}},{key:"saveNotification",value:function(l){return this.http.post(i+"/notification/add",l)}},{key:"getAnnouncement",value:function(){return this.http.get(i+"/announcement")}},{key:"getAnnouncementById",value:function(l){return this.http.get(i+"/announcement/"+l)}},{key:"updateAnnouncement",value:function(l,n){return this.http.put(i+"/announcement/update/"+n,l)}},{key:"saveAnnouncement",value:function(l){return this.http.post(i+"/announcement/add",l)}},{key:"addUser",value:function(l){var n={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(i+"/api/v1/admin/secure/add-user",l,n)}},{key:"fetchUsers",value:function(){return this.http.get(i+"/user")}},{key:"setCrown",value:function(l){var n={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.post(i+"/api/v1/admin/secure/set/crown-value",l,n)}},{key:"editCrown",value:function(l){var n={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.put(i+"/api/v1/admin/secure/crown-value",l,n)}},{key:"adminLogin",value:function(l){return this.http.post(i+"/api/v1/admin/login",l)}},{key:"addPearlToRm",value:function(l){return this.http.post(i+"/crown_to_pearl/add",l)}},{key:"addPearlToRmConvert",value:function(l){var n=new o.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(i+"/pearl_to_money/validate",l)}},{key:"editPeraltoRmConvert",value:function(l,n){var e=new o.g;return e=e.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(i+"/pearl_to_money/update/"+n,l)}},{key:"fetchStreamByType",value:function(l){var n={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(i+"/api/v1/admin/secure/live-streams/"+l,n)}},{key:"getKpi_TopStreamers",value:function(){var l={headers:new o.g({"Content-Type":"application/json","x-access-token":sessionStorage.getItem("userToken")})};return this.http.get(i+"/api/v1/dashboard/top-streamer",l)}},{key:"getdashboardData",value:function(l){var n=new o.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(i+"/api/v1/dashboard/total-revenuecount/"+l)}},{key:"getStreamerreport",value:function(){var l=new o.g;return l=l.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(i+"/pearl_to_money/update/")}},{key:"getViewerReports",value:function(){var l=new o.g;return l=l.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(i+"/pearl_to_money/update/")}},{key:"getTurnoverReport",value:function(){var l=new o.g;return l=l.set("x-access-token",sessionStorage.getItem("userToken")),this.http.get(i+"/api/v1/agent/agent-turnover/BQkBFzre77ZHk4OjzucJz6rYQ552")}},{key:"getStreamerInfo",value:function(){return this.http.get(i+"/api/v1/dashboard/streamer-infolist/"+sessionStorage.getItem("userToken"))}},{key:"getStreamerLocation",value:function(){return this.http.get(i+"/api/v1/dashboard/streamer-location/"+sessionStorage.getItem("userToken"))}},{key:"getViewerLocation",value:function(){return this.http.get(i+"/api/v1/dashboard/viewer-location/"+sessionStorage.getItem("userToken"))}},{key:"approveAgent",value:function(l){var n=new o.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(i+"/api/v1/user/secure/stream-AgentApprove",l)}},{key:"rejectAgent",value:function(l){var n=new o.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(i+"/api/v1/user/secure/stream-AgentApprove",l)}},{key:"acceptRejectStreamer",value:function(l){var n=new o.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(i+"/api/v1/agent/accept-streamer",l)}},{key:"agentWithDrawSubmit",value:function(l){var n=new o.g;return n=n.set("x-access-token",sessionStorage.getItem("userToken")),this.http.post(i+"/api/v1/withdrawble/withdraw-submit",l)}}]),n}();return n.\u0275prov=a["\u0275\u0275defineInjectable"]({factory:function(){return new n(a["\u0275\u0275inject"](o.c))},token:n,providedIn:"root"}),n}()},"K+Kt":function(l,n,e){"use strict";e.d(n,"a",(function(){return t}));var t=function(){function l(l){this.el=l,this.dtOptions={}}return l.prototype.ngOnInit=function(){var l=this;this.dtTrigger?this.dtTrigger.subscribe((function(){l.displayTable()})):this.displayTable()},l.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},l.prototype.displayTable=function(){var l=this;this.dtInstance=new Promise((function(n,e){Promise.resolve(l.dtOptions).then((function(e){setTimeout((function(){l.dt=$(l.el.nativeElement).DataTable(e),n(l.dt)}))}))}))},l}()},axVG:function(l,n,e){"use strict";e.d(n,"a",(function(){return t})),e("K+Kt");var t=function(){function l(){}var n;return n=l,l.forRoot=function(){return{ngModule:n}},l}()}}])}();