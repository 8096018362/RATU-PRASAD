(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{SpFB:function(l,n,t){"use strict";t.r(n),t.d(n,"AcceptModuleNgFactory",(function(){return pl}));var e=t("8Y7J"),o=t("lJxs");class a{constructor(l,n,t,e,a){this.http=l,this.router=n,this.api=t,this.dialog=e,this.matSnackBar=a,this.componentActive=!0,this.giftsData=[],this.showLoading=!1,this.reqObj={status:"accept",agentid:"BQkBFzre77ZHk4OjzucJz6rYQ552",streamerid:"xOyg0KhEbwRQCbq0fwStfbu5fKY2"},this.acceptStreamersTableOptions={dom:"Bfrtip",lengthMenu:[[10,25,50,-1],[10,25,50,"All"]],ajax:(l,n,t)=>{this.http.get("http://3.108.79.136:3000/api/v1/agent/accept-streamer").pipe(Object(o.a)(this.formatJSONData)).subscribe(l=>{n({aaData:null==l?[]:l})})},columns:[{title:"Agent Id",data:"agentId"},{title:"Streamer Id",data:"streamerId"},{title:"User",data:"name"},{title:"Country",data:"country",render:(l,n,t)=>`<a>${null!==l?l:""}</a>`},{title:"Action",orderable:!1,className:"editcenter",render:(l,n,t,e)=>'<a class="badge badge-light-danger badge-pill f-12 mr-2 rejectBtn">Reject</a><a class="badge badge-light-success badge-pill f-12 mr-2 approveBtn">Approve</a>'}],buttons:[],rowCallback:(l,n,t)=>{$(".rejectBtn",l).bind("click",()=>{this.rejectModal(n)}),$(".approveBtn",l).bind("click",()=>{this.approveModal(n)})}}}formatJSONData(l){return l.data||{}}approveModal(l){this.dialog.open(u,{width:"500px",panelClass:"actionDialog"}).afterClosed().subscribe(n=>{"approve"==n&&this.api.acceptRejectStreamer({status:"accept",agentid:l.agentId,streamerid:l.streamerId}).subscribe(l=>{l.success&&this.matSnackBar.open("Accepted successfully","OK",{panelClass:"snack-success",duration:2e3,verticalPosition:"top",horizontalPosition:"right"})})})}rejectModal(l){this.dialog.open(d,{width:"500px"}).afterClosed().subscribe(l=>{console.log("dialog closed")})}ngOnInit(){}ngOnDestroy(){this.componentActive=!1}view(l){this.api.giftId=l,this.router.navigate(["/gift/add"])}add(){this.router.navigate(["/gift/add"])}}class u{constructor(l){this.dialogRef=l}close(){this.dialogRef.close()}approve(){this.dialogRef.close("approve")}}class d{constructor(l){this.dialogRef=l}close(){this.dialogRef.close()}submit(){console.log(this.reason),this.dialogRef.close()}}class i{}var c=t("pMnS"),s=t("rMcs"),r=t("W8s6"),p=t("9AJC"),m=t("9cE2"),b=t("007U"),g=[".stle[_ngcontent-%COMP%]{margin-bottom:0;color:#33454e;font-size:.9375rem;font-weight:600}.model-body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;margin:16px 0}.model-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0}.button_bar[_ngcontent-%COMP%]{display:flex}.button_bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px}.headerText[_ngcontent-%COMP%]{text-align:center;border-bottom:1px solid #ddd;padding-bottom:5px;font-size:16px;font-weight:600}.buttonBar[_ngcontent-%COMP%]{width:100%}.buttonBar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:48%}.buttonBar[_ngcontent-%COMP%]   .approveBtn[_ngcontent-%COMP%]{color:#fff;margin-right:14px;border-color:#b39900!important;background:#b39900!important}.buttonBar[_ngcontent-%COMP%]   .closeBtn[_ngcontent-%COMP%]{color:#fff;background-color:#6c757d;border-color:#6c757d}"],v=t("8F4m"),f=t("w2bA"),h=t("K+Kt"),C=t("SVse"),M=t("IheW"),x=t("iInd"),O=t("H+bZ"),L=t("iELJ"),R=t("zHaW"),_=t("1Xc+"),y=t("Dxy4"),w=t("YEUz"),j=t("omvX"),k=t("s7LF"),I=e["\u0275crt"]({encapsulation:0,styles:[g],data:{}});function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-loader",[],null,null,null,v.b,v.a)),e["\u0275did"](1,114688,null,0,f.a,[],null,null)],(function(l,n){l(n,1,0)}),null)}function B(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","row py-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"div",[["class","col-md-12 py-3 mt-3 mb-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"div",[["class","col-md-12 table-responsive"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"table",[["class","table table-striped table-bordered table-hover"],["datatable",""]],null,null,null,null,null)),e["\u0275did"](4,212992,null,0,h.a,[e.ElementRef],{dtOptions:[0,"dtOptions"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,A)),e["\u0275did"](6,16384,null,0,C.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,4,0,t.acceptStreamersTableOptions),l(n,6,0,t.showLoading)}),null)}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-accept",[],null,null,null,B,I)),e["\u0275did"](1,245760,null,0,a,[M.c,x.o,O.a,L.e,R.b],null,null)],(function(l,n){l(n,1,0)}),null)}var E=e["\u0275ccf"]("app-accept",a,P,{},{},[]),N=e["\u0275crt"]({encapsulation:0,styles:[g],data:{}});function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"div",[["class","mat-dialog-content"],["mat-dialog-content",""]],null,null,null,null,null)),e["\u0275did"](1,16384,null,0,L.h,[],null,null),(l()(),e["\u0275eld"](2,0,null,null,1,"div",[["class","headerText"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Approve"])),(l()(),e["\u0275eld"](4,0,null,null,2,"div",[["class","model-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Are you sure to Approve?"])),(l()(),e["\u0275eld"](7,0,null,null,6,"div",[["class","buttonBar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,2,"button",[["class","approveBtn mat-focus-indicator"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.approve()&&e),e}),_.b,_.a)),e["\u0275did"](9,4374528,null,0,y.b,[e.ElementRef,w.e,[2,j.a]],null,null),(l()(),e["\u0275ted"](-1,0,["Approve"])),(l()(),e["\u0275eld"](11,0,null,null,2,"button",[["class","closeBtn mat-focus-indicator"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.close()&&e),e}),_.b,_.a)),e["\u0275did"](12,4374528,null,0,y.b,[e.ElementRef,w.e,[2,j.a]],null,null),(l()(),e["\u0275ted"](-1,0,["Close"]))],null,(function(l,n){l(n,8,0,e["\u0275nov"](n,9).disabled||null,"NoopAnimations"===e["\u0275nov"](n,9)._animationMode,e["\u0275nov"](n,9).disabled),l(n,11,0,e["\u0275nov"](n,12).disabled||null,"NoopAnimations"===e["\u0275nov"](n,12)._animationMode,e["\u0275nov"](n,12).disabled)}))}function z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"approve-dialog",[],null,null,null,S,N)),e["\u0275did"](1,49152,null,0,u,[L.j],null,null)],null,null)}var D=e["\u0275ccf"]("approve-dialog",u,z,{},{},[]),F=e["\u0275crt"]({encapsulation:0,styles:[g],data:{}});function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,17,"div",[["class","mat-dialog-content"],["mat-dialog-content",""]],null,null,null,null,null)),e["\u0275did"](1,16384,null,0,L.h,[],null,null),(l()(),e["\u0275eld"](2,0,null,null,1,"div",[["class","headerText"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Reason to Reject"])),(l()(),e["\u0275eld"](4,0,null,null,6,"div",[["class","model-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,5,"textarea",[["matInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,t){var o=!0,a=l.component;return"input"===n&&(o=!1!==e["\u0275nov"](l,6)._handleInput(t.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,6).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,6)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,6)._compositionEnd(t.target.value)&&o),"ngModelChange"===n&&(o=!1!==(a.reason=t)&&o),o}),null,null)),e["\u0275did"](6,16384,null,0,k.d,[e.Renderer2,e.ElementRef,[2,k.a]],null,null),e["\u0275prd"](1024,null,k.l,(function(l){return[l]}),[k.d]),e["\u0275did"](8,671744,null,0,k.q,[[8,null],[8,null],[8,null],[6,k.l]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,k.m,null,[k.q]),e["\u0275did"](10,16384,null,0,k.n,[[4,k.m]],null,null),(l()(),e["\u0275eld"](11,0,null,null,6,"div",[["class","buttonBar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,2,"button",[["class","approveBtn mat-focus-indicator"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.submit()&&e),e}),_.b,_.a)),e["\u0275did"](13,4374528,null,0,y.b,[e.ElementRef,w.e,[2,j.a]],null,null),(l()(),e["\u0275ted"](-1,0,["Submit"])),(l()(),e["\u0275eld"](15,0,null,null,2,"button",[["class","closeBtn mat-focus-indicator"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.close()&&e),e}),_.b,_.a)),e["\u0275did"](16,4374528,null,0,y.b,[e.ElementRef,w.e,[2,j.a]],null,null),(l()(),e["\u0275ted"](-1,0,["Close"]))],(function(l,n){l(n,8,0,n.component.reason)}),(function(l,n){l(n,5,0,e["\u0275nov"](n,10).ngClassUntouched,e["\u0275nov"](n,10).ngClassTouched,e["\u0275nov"](n,10).ngClassPristine,e["\u0275nov"](n,10).ngClassDirty,e["\u0275nov"](n,10).ngClassValid,e["\u0275nov"](n,10).ngClassInvalid,e["\u0275nov"](n,10).ngClassPending),l(n,12,0,e["\u0275nov"](n,13).disabled||null,"NoopAnimations"===e["\u0275nov"](n,13)._animationMode,e["\u0275nov"](n,13).disabled),l(n,15,0,e["\u0275nov"](n,16).disabled||null,"NoopAnimations"===e["\u0275nov"](n,16)._animationMode,e["\u0275nov"](n,16).disabled)}))}function W(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"reject-dialog",[],null,null,null,T,F)),e["\u0275did"](1,49152,null,0,d,[L.j],null,null)],null,null)}var J=e["\u0275ccf"]("reject-dialog",d,W,{},{},[]),U=t("luWi"),K=t("0NUV"),H=t("DoSW"),Z=t("G0yt"),Q=t("9OXH"),V=t("7oHd"),q=t("1O3W"),Y=t("9gLZ"),X=t("axVG"),G=t("aLe/"),ll=t("N4L5"),nl=t("wcvO"),tl=t("z0HF"),el=t("sIwa"),ol=t("bxSN"),al=t("iAM3"),ul=t("KLca"),dl=t("ebz3"),il=t("1z/I"),cl=t("SCoL"),sl=t("7KAL"),rl=t("UhP/"),pl=e["\u0275cmf"](i,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,s.a,r.a,p.a,p.b,p.l,p.m,p.i,p.j,p.k,m.a,b.a,b.b,E,D,J]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,C.NgLocalization,C.NgLocaleLocalization,[e.LOCALE_ID]),e["\u0275mpd"](4608,k.y,k.y,[]),e["\u0275mpd"](4608,k.e,k.e,[]),e["\u0275mpd"](4608,U.LightboxConfig,U.LightboxConfig,[]),e["\u0275mpd"](4608,K.LightboxEvent,K.LightboxEvent,[]),e["\u0275mpd"](4608,H.Lightbox,H.Lightbox,[e.ComponentFactoryResolver,e.Injector,e.ApplicationRef,U.LightboxConfig,K.LightboxEvent]),e["\u0275mpd"](4608,K.LightboxWindowRef,K.LightboxWindowRef,[]),e["\u0275mpd"](4608,Z.C,Z.C,[e.ComponentFactoryResolver,e.Injector,Z.Db,Z.D]),e["\u0275mpd"](4608,f.a,f.a,[]),e["\u0275mpd"](4608,Q.a,Q.a,[]),e["\u0275mpd"](4608,V.a,V.a,[]),e["\u0275mpd"](4608,q.a,q.a,[q.h,q.c,e.ComponentFactoryResolver,q.g,q.d,e.Injector,e.NgZone,C.DOCUMENT,Y.b,C.Location,q.f]),e["\u0275mpd"](5120,q.i,q.j,[q.a]),e["\u0275mpd"](5120,L.c,L.d,[q.a]),e["\u0275mpd"](135680,L.e,L.e,[q.a,e.Injector,[2,C.Location],[2,L.b],L.c,[3,L.e],q.c]),e["\u0275mpd"](1073742336,C.CommonModule,C.CommonModule,[]),e["\u0275mpd"](1073742336,X.a,X.a,[]),e["\u0275mpd"](1073742336,G.d,G.d,[]),e["\u0275mpd"](1073742336,k.x,k.x,[]),e["\u0275mpd"](1073742336,k.j,k.j,[]),e["\u0275mpd"](1073742336,k.t,k.t,[]),e["\u0275mpd"](1073742336,ll.a,ll.a,[]),e["\u0275mpd"](1073742336,Z.z,Z.z,[]),e["\u0275mpd"](1073742336,nl.a,nl.a,[]),e["\u0275mpd"](1073742336,x.s,x.s,[[2,x.x],[2,x.o]]),e["\u0275mpd"](1073742336,tl.a,tl.a,[]),e["\u0275mpd"](1073742336,el.a,el.a,[]),e["\u0275mpd"](1073742336,ol.ClickOutsideModule,ol.ClickOutsideModule,[]),e["\u0275mpd"](1073742336,al.LightboxModule,al.LightboxModule,[]),e["\u0275mpd"](1073742336,Z.c,Z.c,[]),e["\u0275mpd"](1073742336,Z.f,Z.f,[]),e["\u0275mpd"](1073742336,Z.h,Z.h,[]),e["\u0275mpd"](1073742336,Z.l,Z.l,[]),e["\u0275mpd"](1073742336,Z.n,Z.n,[]),e["\u0275mpd"](1073742336,Z.t,Z.t,[]),e["\u0275mpd"](1073742336,Z.E,Z.E,[]),e["\u0275mpd"](1073742336,Z.L,Z.L,[]),e["\u0275mpd"](1073742336,Z.Q,Z.Q,[]),e["\u0275mpd"](1073742336,Z.W,Z.W,[]),e["\u0275mpd"](1073742336,Z.Z,Z.Z,[]),e["\u0275mpd"](1073742336,Z.eb,Z.eb,[]),e["\u0275mpd"](1073742336,Z.ob,Z.ob,[]),e["\u0275mpd"](1073742336,Z.rb,Z.rb,[]),e["\u0275mpd"](1073742336,Z.sb,Z.sb,[]),e["\u0275mpd"](1073742336,Z.tb,Z.tb,[]),e["\u0275mpd"](1073742336,Z.jb,Z.jb,[]),e["\u0275mpd"](1073742336,Z.F,Z.F,[]),e["\u0275mpd"](1073742336,ul.a,ul.a,[]),e["\u0275mpd"](1073742336,dl.a,dl.a,[]),e["\u0275mpd"](1073742336,Y.a,Y.a,[]),e["\u0275mpd"](1073742336,il.e,il.e,[]),e["\u0275mpd"](1073742336,cl.b,cl.b,[]),e["\u0275mpd"](1073742336,sl.a,sl.a,[]),e["\u0275mpd"](1073742336,sl.c,sl.c,[]),e["\u0275mpd"](1073742336,q.e,q.e,[]),e["\u0275mpd"](1073742336,rl.h,rl.h,[w.g,[2,rl.c],[2,C.DOCUMENT]]),e["\u0275mpd"](1073742336,L.i,L.i,[]),e["\u0275mpd"](1073742336,rl.k,rl.k,[]),e["\u0275mpd"](1073742336,y.c,y.c,[]),e["\u0275mpd"](1073742336,R.e,R.e,[]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](256,G.a,dl.b,[]),e["\u0275mpd"](1024,x.m,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);