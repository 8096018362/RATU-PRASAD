!function(){function n(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function l(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function t(n,t,e){return t&&l(n.prototype,t),e&&l(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{SpFB:function(l,e,o){"use strict";o.r(e),o.d(e,"AcceptModuleNgFactory",(function(){return pn}));var a=o("8Y7J"),u=o("lJxs"),i=function(){function l(t,e,o,a,i){var d=this;n(this,l),this.http=t,this.router=e,this.api=o,this.dialog=a,this.matSnackBar=i,this.componentActive=!0,this.giftsData=[],this.showLoading=!1,this.reqObj={status:"accept",agentid:"BQkBFzre77ZHk4OjzucJz6rYQ552",streamerid:"xOyg0KhEbwRQCbq0fwStfbu5fKY2"},this.acceptStreamersTableOptions={dom:"Bfrtip",lengthMenu:[[10,25,50,-1],[10,25,50,"All"]],ajax:function(n,l,t){d.http.get("http://3.108.79.136:3000/api/v1/agent/accept-streamer").pipe(Object(u.a)(d.formatJSONData)).subscribe((function(n){l({aaData:null==n?[]:n})}))},columns:[{title:"Agent Id",data:"agentId"},{title:"Streamer Id",data:"streamerId"},{title:"User",data:"name"},{title:"Country",data:"country",render:function(n,l,t){return"<a>".concat(null!==n?n:"","</a>")}},{title:"Action",orderable:!1,className:"editcenter",render:function(n,l,t,e){return'<a class="badge badge-light-danger badge-pill f-12 mr-2 rejectBtn">Reject</a><a class="badge badge-light-success badge-pill f-12 mr-2 approveBtn">Approve</a>'}}],buttons:[],rowCallback:function(n,l,t){$(".rejectBtn",n).bind("click",(function(){d.rejectModal(l)})),$(".approveBtn",n).bind("click",(function(){d.approveModal(l)}))}}}return t(l,[{key:"formatJSONData",value:function(n){return n.data||{}}},{key:"approveModal",value:function(n){var l=this;this.dialog.open(d,{width:"500px",panelClass:"actionDialog"}).afterClosed().subscribe((function(t){"approve"==t&&l.api.acceptRejectStreamer({status:"accept",agentid:n.agentId,streamerid:n.streamerId}).subscribe((function(n){n.success&&l.matSnackBar.open("Accepted successfully","OK",{panelClass:"snack-success",duration:2e3,verticalPosition:"top",horizontalPosition:"right"})}))}))}},{key:"rejectModal",value:function(n){this.dialog.open(c,{width:"500px"}).afterClosed().subscribe((function(n){console.log("dialog closed")}))}},{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.componentActive=!1}},{key:"view",value:function(n){this.api.giftId=n,this.router.navigate(["/gift/add"])}},{key:"add",value:function(){this.router.navigate(["/gift/add"])}}]),l}(),d=function(){function l(t){n(this,l),this.dialogRef=t}return t(l,[{key:"close",value:function(){this.dialogRef.close()}},{key:"approve",value:function(){this.dialogRef.close("approve")}}]),l}(),c=function(){function l(t){n(this,l),this.dialogRef=t}return t(l,[{key:"close",value:function(){this.dialogRef.close()}},{key:"submit",value:function(){console.log(this.reason),this.dialogRef.close()}}]),l}(),r=function l(){n(this,l)},s=o("pMnS"),p=o("rMcs"),m=o("W8s6"),b=o("9AJC"),g=o("9cE2"),f=o("007U"),v=[".stle[_ngcontent-%COMP%]{margin-bottom:0;color:#33454e;font-size:.9375rem;font-weight:600}.model-body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;margin:16px 0}.model-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0}.button_bar[_ngcontent-%COMP%]{display:flex}.button_bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px}.headerText[_ngcontent-%COMP%]{text-align:center;border-bottom:1px solid #ddd;padding-bottom:5px;font-size:16px;font-weight:600}.buttonBar[_ngcontent-%COMP%]{width:100%}.buttonBar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:48%}.buttonBar[_ngcontent-%COMP%]   .approveBtn[_ngcontent-%COMP%]{color:#fff;margin-right:14px;border-color:#b39900!important;background:#b39900!important}.buttonBar[_ngcontent-%COMP%]   .closeBtn[_ngcontent-%COMP%]{color:#fff;background-color:#6c757d;border-color:#6c757d}"],h=o("8F4m"),C=o("w2bA"),y=o("K+Kt"),M=o("SVse"),O=o("IheW"),k=o("iInd"),x=o("H+bZ"),L=o("iELJ"),R=o("zHaW"),_=o("1Xc+"),w=o("Dxy4"),j=o("YEUz"),I=o("omvX"),A=o("s7LF"),B=a["\u0275crt"]({encapsulation:0,styles:[v],data:{}});function P(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"app-loader",[],null,null,null,h.b,h.a)),a["\u0275did"](1,114688,null,0,C.a,[],null,null)],(function(n,l){n(l,1,0)}),null)}function E(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,4,"div",[["class","row py-3"]],null,null,null,null,null)),(n()(),a["\u0275eld"](1,0,null,null,0,"div",[["class","col-md-12 py-3 mt-3 mb-3"]],null,null,null,null,null)),(n()(),a["\u0275eld"](2,0,null,null,2,"div",[["class","col-md-12 table-responsive"]],null,null,null,null,null)),(n()(),a["\u0275eld"](3,0,null,null,1,"table",[["class","table table-striped table-bordered table-hover"],["datatable",""]],null,null,null,null,null)),a["\u0275did"](4,212992,null,0,y.a,[a.ElementRef],{dtOptions:[0,"dtOptions"]},null),(n()(),a["\u0275and"](16777216,null,null,1,null,P)),a["\u0275did"](6,16384,null,0,M.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,4,0,t.acceptStreamersTableOptions),n(l,6,0,t.showLoading)}),null)}var N=a["\u0275ccf"]("app-accept",i,(function(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"app-accept",[],null,null,null,E,B)),a["\u0275did"](1,245760,null,0,i,[O.c,k.o,x.a,L.e,R.b],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),S=a["\u0275crt"]({encapsulation:0,styles:[v],data:{}});function z(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,13,"div",[["class","mat-dialog-content"],["mat-dialog-content",""]],null,null,null,null,null)),a["\u0275did"](1,16384,null,0,L.h,[],null,null),(n()(),a["\u0275eld"](2,0,null,null,1,"div",[["class","headerText"]],null,null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Approve"])),(n()(),a["\u0275eld"](4,0,null,null,2,"div",[["class","model-body"]],null,null,null,null,null)),(n()(),a["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Are you sure to Approve?"])),(n()(),a["\u0275eld"](7,0,null,null,6,"div",[["class","buttonBar"]],null,null,null,null,null)),(n()(),a["\u0275eld"](8,0,null,null,2,"button",[["class","approveBtn mat-focus-indicator"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.approve()&&e),e}),_.b,_.a)),a["\u0275did"](9,4374528,null,0,w.b,[a.ElementRef,j.e,[2,I.a]],null,null),(n()(),a["\u0275ted"](-1,0,["Approve"])),(n()(),a["\u0275eld"](11,0,null,null,2,"button",[["class","closeBtn mat-focus-indicator"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.close()&&e),e}),_.b,_.a)),a["\u0275did"](12,4374528,null,0,w.b,[a.ElementRef,j.e,[2,I.a]],null,null),(n()(),a["\u0275ted"](-1,0,["Close"]))],null,(function(n,l){n(l,8,0,a["\u0275nov"](l,9).disabled||null,"NoopAnimations"===a["\u0275nov"](l,9)._animationMode,a["\u0275nov"](l,9).disabled),n(l,11,0,a["\u0275nov"](l,12).disabled||null,"NoopAnimations"===a["\u0275nov"](l,12)._animationMode,a["\u0275nov"](l,12).disabled)}))}var D=a["\u0275ccf"]("approve-dialog",d,(function(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"approve-dialog",[],null,null,null,z,S)),a["\u0275did"](1,49152,null,0,d,[L.j],null,null)],null,null)}),{},{},[]),F=a["\u0275crt"]({encapsulation:0,styles:[v],data:{}});function T(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,17,"div",[["class","mat-dialog-content"],["mat-dialog-content",""]],null,null,null,null,null)),a["\u0275did"](1,16384,null,0,L.h,[],null,null),(n()(),a["\u0275eld"](2,0,null,null,1,"div",[["class","headerText"]],null,null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Reason to Reject"])),(n()(),a["\u0275eld"](4,0,null,null,6,"div",[["class","model-body"]],null,null,null,null,null)),(n()(),a["\u0275eld"](5,0,null,null,5,"textarea",[["matInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0,o=n.component;return"input"===l&&(e=!1!==a["\u0275nov"](n,6)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==a["\u0275nov"](n,6).onTouched()&&e),"compositionstart"===l&&(e=!1!==a["\u0275nov"](n,6)._compositionStart()&&e),"compositionend"===l&&(e=!1!==a["\u0275nov"](n,6)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.reason=t)&&e),e}),null,null)),a["\u0275did"](6,16384,null,0,A.d,[a.Renderer2,a.ElementRef,[2,A.a]],null,null),a["\u0275prd"](1024,null,A.l,(function(n){return[n]}),[A.d]),a["\u0275did"](8,671744,null,0,A.q,[[8,null],[8,null],[8,null],[6,A.l]],{model:[0,"model"]},{update:"ngModelChange"}),a["\u0275prd"](2048,null,A.m,null,[A.q]),a["\u0275did"](10,16384,null,0,A.n,[[4,A.m]],null,null),(n()(),a["\u0275eld"](11,0,null,null,6,"div",[["class","buttonBar"]],null,null,null,null,null)),(n()(),a["\u0275eld"](12,0,null,null,2,"button",[["class","approveBtn mat-focus-indicator"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.submit()&&e),e}),_.b,_.a)),a["\u0275did"](13,4374528,null,0,w.b,[a.ElementRef,j.e,[2,I.a]],null,null),(n()(),a["\u0275ted"](-1,0,["Submit"])),(n()(),a["\u0275eld"](15,0,null,null,2,"button",[["class","closeBtn mat-focus-indicator"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.close()&&e),e}),_.b,_.a)),a["\u0275did"](16,4374528,null,0,w.b,[a.ElementRef,j.e,[2,I.a]],null,null),(n()(),a["\u0275ted"](-1,0,["Close"]))],(function(n,l){n(l,8,0,l.component.reason)}),(function(n,l){n(l,5,0,a["\u0275nov"](l,10).ngClassUntouched,a["\u0275nov"](l,10).ngClassTouched,a["\u0275nov"](l,10).ngClassPristine,a["\u0275nov"](l,10).ngClassDirty,a["\u0275nov"](l,10).ngClassValid,a["\u0275nov"](l,10).ngClassInvalid,a["\u0275nov"](l,10).ngClassPending),n(l,12,0,a["\u0275nov"](l,13).disabled||null,"NoopAnimations"===a["\u0275nov"](l,13)._animationMode,a["\u0275nov"](l,13).disabled),n(l,15,0,a["\u0275nov"](l,16).disabled||null,"NoopAnimations"===a["\u0275nov"](l,16)._animationMode,a["\u0275nov"](l,16).disabled)}))}var W=a["\u0275ccf"]("reject-dialog",c,(function(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"reject-dialog",[],null,null,null,T,F)),a["\u0275did"](1,49152,null,0,c,[L.j],null,null)],null,null)}),{},{},[]),J=o("luWi"),U=o("0NUV"),K=o("DoSW"),H=o("G0yt"),Z=o("9OXH"),Q=o("7oHd"),V=o("1O3W"),q=o("9gLZ"),Y=o("axVG"),X=o("aLe/"),G=o("N4L5"),nn=o("wcvO"),ln=o("z0HF"),tn=o("sIwa"),en=o("bxSN"),on=o("iAM3"),an=o("KLca"),un=o("ebz3"),dn=o("1z/I"),cn=o("SCoL"),rn=o("7KAL"),sn=o("UhP/"),pn=a["\u0275cmf"](r,[],(function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,p.a,m.a,b.a,b.b,b.l,b.m,b.i,b.j,b.k,g.a,f.a,f.b,N,D,W]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,M.NgLocalization,M.NgLocaleLocalization,[a.LOCALE_ID]),a["\u0275mpd"](4608,A.y,A.y,[]),a["\u0275mpd"](4608,A.e,A.e,[]),a["\u0275mpd"](4608,J.LightboxConfig,J.LightboxConfig,[]),a["\u0275mpd"](4608,U.LightboxEvent,U.LightboxEvent,[]),a["\u0275mpd"](4608,K.Lightbox,K.Lightbox,[a.ComponentFactoryResolver,a.Injector,a.ApplicationRef,J.LightboxConfig,U.LightboxEvent]),a["\u0275mpd"](4608,U.LightboxWindowRef,U.LightboxWindowRef,[]),a["\u0275mpd"](4608,H.C,H.C,[a.ComponentFactoryResolver,a.Injector,H.Db,H.D]),a["\u0275mpd"](4608,C.a,C.a,[]),a["\u0275mpd"](4608,Z.a,Z.a,[]),a["\u0275mpd"](4608,Q.a,Q.a,[]),a["\u0275mpd"](4608,V.a,V.a,[V.h,V.c,a.ComponentFactoryResolver,V.g,V.d,a.Injector,a.NgZone,M.DOCUMENT,q.b,M.Location,V.f]),a["\u0275mpd"](5120,V.i,V.j,[V.a]),a["\u0275mpd"](5120,L.c,L.d,[V.a]),a["\u0275mpd"](135680,L.e,L.e,[V.a,a.Injector,[2,M.Location],[2,L.b],L.c,[3,L.e],V.c]),a["\u0275mpd"](1073742336,M.CommonModule,M.CommonModule,[]),a["\u0275mpd"](1073742336,Y.a,Y.a,[]),a["\u0275mpd"](1073742336,X.d,X.d,[]),a["\u0275mpd"](1073742336,A.x,A.x,[]),a["\u0275mpd"](1073742336,A.j,A.j,[]),a["\u0275mpd"](1073742336,A.t,A.t,[]),a["\u0275mpd"](1073742336,G.a,G.a,[]),a["\u0275mpd"](1073742336,H.z,H.z,[]),a["\u0275mpd"](1073742336,nn.a,nn.a,[]),a["\u0275mpd"](1073742336,k.s,k.s,[[2,k.x],[2,k.o]]),a["\u0275mpd"](1073742336,ln.a,ln.a,[]),a["\u0275mpd"](1073742336,tn.a,tn.a,[]),a["\u0275mpd"](1073742336,en.ClickOutsideModule,en.ClickOutsideModule,[]),a["\u0275mpd"](1073742336,on.LightboxModule,on.LightboxModule,[]),a["\u0275mpd"](1073742336,H.c,H.c,[]),a["\u0275mpd"](1073742336,H.f,H.f,[]),a["\u0275mpd"](1073742336,H.h,H.h,[]),a["\u0275mpd"](1073742336,H.l,H.l,[]),a["\u0275mpd"](1073742336,H.n,H.n,[]),a["\u0275mpd"](1073742336,H.t,H.t,[]),a["\u0275mpd"](1073742336,H.E,H.E,[]),a["\u0275mpd"](1073742336,H.L,H.L,[]),a["\u0275mpd"](1073742336,H.Q,H.Q,[]),a["\u0275mpd"](1073742336,H.W,H.W,[]),a["\u0275mpd"](1073742336,H.Z,H.Z,[]),a["\u0275mpd"](1073742336,H.eb,H.eb,[]),a["\u0275mpd"](1073742336,H.ob,H.ob,[]),a["\u0275mpd"](1073742336,H.rb,H.rb,[]),a["\u0275mpd"](1073742336,H.sb,H.sb,[]),a["\u0275mpd"](1073742336,H.tb,H.tb,[]),a["\u0275mpd"](1073742336,H.jb,H.jb,[]),a["\u0275mpd"](1073742336,H.F,H.F,[]),a["\u0275mpd"](1073742336,an.a,an.a,[]),a["\u0275mpd"](1073742336,un.a,un.a,[]),a["\u0275mpd"](1073742336,q.a,q.a,[]),a["\u0275mpd"](1073742336,dn.e,dn.e,[]),a["\u0275mpd"](1073742336,cn.b,cn.b,[]),a["\u0275mpd"](1073742336,rn.a,rn.a,[]),a["\u0275mpd"](1073742336,rn.c,rn.c,[]),a["\u0275mpd"](1073742336,V.e,V.e,[]),a["\u0275mpd"](1073742336,sn.h,sn.h,[j.g,[2,sn.c],[2,M.DOCUMENT]]),a["\u0275mpd"](1073742336,L.i,L.i,[]),a["\u0275mpd"](1073742336,sn.k,sn.k,[]),a["\u0275mpd"](1073742336,w.c,w.c,[]),a["\u0275mpd"](1073742336,R.e,R.e,[]),a["\u0275mpd"](1073742336,r,r,[]),a["\u0275mpd"](256,X.a,un.b,[]),a["\u0275mpd"](1024,k.m,(function(){return[[{path:"",component:i}]]}),[])])}))}}])}();