(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{SiuC:function(t,e,i){"use strict";i.r(e),i.d(e,"KkalModule",function(){return I});var n=i("ofXK"),a=i("fXoL");let s=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[n.c]]}),t})(),o=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[n.c]]}),t})();var c=i("PCNd"),r=i("tyNb");const l={input:{in:0,activityCoeff:1.2,weight:80},stats:{gain:0,keep:0,lose:0},constStats:{height:165,gender:"f",birthday:new Date("09/17/1996")}};let b=(()=>{class t{constructor(){}calcStats(t){let e=0;const i=(new Date).getFullYear()-t.constStats.birthday.getFullYear();return e="f"===t.constStats.gender?Math.round((9.99*t.input.weight+6.25*t.constStats.height-4.92*i-161)*t.input.activityCoeff):Math.round((9.99*t.input.weight+6.25*t.constStats.height-4.92*i+5)*t.input.activityCoeff),Object.assign(Object.assign({},t.stats),{keep:e,gain:Math.round(1.2*e),lose:Math.round(.8*e)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=i("zx2A");class h{constructor(t){this.durationSelector=t}call(t,e){return e.subscribe(new p(t,this.durationSelector))}}class p extends u.b{constructor(t,e){super(t),this.durationSelector=e,this.hasValue=!1}_next(t){try{const e=this.durationSelector.call(this,t);e&&this._tryNext(t,e)}catch(e){this.destination.error(e)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(t,e){let i=this.durationSubscription;this.value=t,this.hasValue=!0,i&&(i.unsubscribe(),this.remove(i)),i=Object(u.c)(e,new u.a(this)),i&&!i.closed&&this.add(this.durationSubscription=i)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const t=this.value,e=this.durationSubscription;e&&(this.durationSubscription=void 0,e.unsubscribe(),this.remove(e)),this.value=void 0,this.hasValue=!1,super._next(t)}}}var d=i("2Vo4"),f=i("xgIS"),g=i("PqYM");const _=1e3;let S=(()=>{class t{constructor(t){var e;this.currentIsMobile=!1,this._isMobile$=new d.a({mobile:!1}),this.screenWidth=t.innerWidth,this._isMobile$.next({mobile:this.screenWidth<_}),Object(f.a)(t,"resize").pipe((e=()=>Object(g.a)(50),t=>t.lift(new h(e)))).subscribe(t=>{this.screenWidth=t.target.innerWidth,this.currentIsMobile!=this.screenWidth<_&&(this.currentIsMobile=this.screenWidth<_,this._isMobile$.next({mobile:this.screenWidth<_}))})}get isMobile$(){return this._isMobile$.asObservable()}}return t.\u0275fac=function(e){return new(e||t)(a.bc("Window"))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=i("f0Cb"),w=i("kmnG"),v=i("qFsG"),$=i("3Pt+"),M=i("jaxi");let T=(()=>{class t{transform(t,...e){const i=Math.round(.3*t),n=Math.round(.6*t),a=Math.round(.3*t);return`\u0432\u0441\u0435\u0433\u043e: ${t} \u043a\u043a\u0430\u043b, \u0431: ${Math.round(i/4)}\u0433 (${i} \u043a\u043a\u0430\u043b), \u0436: ${Math.round(a/9)}\u0433 (${a} \u043a\u043a\u0430\u043b), \u0443: ${Math.round(n/4)}\u0433 (${n} \u043a\u043a\u0430\u043b)`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Lb({name:"bzu",type:t,pure:!0}),t})();const y=7e3;let A=(()=>{class t{transform(t,e){return`${(7*(e-t)/y).toFixed(2)}\u043a\u0433 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e, ${(30*(e-t)/y).toFixed(2)}\u043a\u0433 \u0432 \u043c\u0435\u0441\u044f\u0446, ${(365*(e-t)/y).toFixed(2)}\u043a\u0433 \u0432 \u0433\u043e\u0434`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Lb({name:"speed",type:t,pure:!0}),t})();function C(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div"),a.Sb(1,"p"),a.ac(2,1),a.Nb(3,"span"),a.Sb(4,"mat-form-field",2),a.Sb(5,"input",3),a.fc("ngModelChange",function(e){return a.qc(t),a.hc().weight=e}),a.Rb(),a.Rb(),a.Yb(),a.Rb(),a.Sb(6,"div",4),a.Sb(7,"div",5),a.Sb(8,"p"),a.ac(9,6),a.Nb(10,"span"),a.Yb(),a.Rb(),a.Sb(11,"mat-button-toggle-group",7,8),a.fc("change",function(e){return a.qc(t),a.hc().changeCoeff(e)}),a.Sb(13,"mat-button-toggle",9),a.Sb(14,"span",10),a.xc(15,"\u0423\u0441\u0442\u0440\u0438\u0447\u043a\u0430"),a.Rb(),a.Rb(),a.Sb(16,"mat-button-toggle",11),a.Sb(17,"span",10),a.xc(18,"\u041f\u043e\u043b\u0443\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u043e\u0448\u043a\u0430"),a.Rb(),a.Rb(),a.Sb(19,"mat-button-toggle",12),a.Sb(20,"span",10),a.xc(21,"\u0421\u0443\u043f\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u043e\u0448\u043a\u0430"),a.Rb(),a.Rb(),a.Sb(22,"mat-button-toggle",13),a.Sb(23,"span",10),a.xc(24,"\u0417\u0430\u0432\u043e\u0434\u043d\u043e\u0439 \u0445\u043e\u043c\u044f\u043a"),a.Rb(),a.Rb(),a.Sb(25,"mat-button-toggle",14),a.Sb(26,"span",10),a.xc(27,"\u0421\u0443\u043c\u0430\u0441\u0448\u0435\u0434\u0448\u0430\u044f \u043f\u0447\u0451\u043b\u043a\u0430"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(28,"div",15),a.Sb(29,"p"),a.ac(30,16),a.Nb(31,"span",17),a.ic(32,"bzu"),a.Yb(),a.Rb(),a.Sb(33,"p"),a.ac(34,18),a.Nb(35,"span",17),a.ic(36,"bzu"),a.Yb(),a.Rb(),a.Sb(37,"p"),a.ac(38,19),a.Nb(39,"span",17),a.ic(40,"bzu"),a.Nb(41,"br"),a.ic(42,"speed"),a.Yb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()}if(2&t){const t=e.ngIf,i=a.hc();a.Cb(5),a.nc("ngModel",i.weight),a.Cb(1),a.Eb("_mobile",t.mobile),a.Cb(1),a.Eb("_mobile",t.mobile),a.Cb(3),a.Zb(i.data.input.activityCoeff),a.Xb(9),a.Cb(1),a.nc("vertical",t.mobile),a.Cb(17),a.Eb("_mobile",t.mobile),a.Cb(4),a.Zb(a.jc(32,13,i.data.stats.gain)),a.Xb(30),a.Cb(4),a.Zb(a.jc(36,15,i.data.stats.keep)),a.Xb(34),a.Cb(6),a.Zb(a.jc(40,17,i.data.stats.lose))(a.kc(42,19,i.data.stats.lose,i.data.stats.keep)),a.Xb(38)}}const N="statsData";let R=(()=>{class t{constructor(t,e,i){this.cdr=t,this.calcs=e,this.layoutService=i,this.data=l}get weight(){return this.data.input.weight}set weight(t){this.data.input.weight=t,localStorage.setItem(N,t.toString()),this.calcStats()}changeCoeff(t){console.log(t),this.data.input.activityCoeff=t.value,this.calcStats()}ngOnInit(){const t=Number(localStorage.getItem(N));t&&(this.data.input.weight=t),this.calcStats(),this.isMobile$=this.layoutService.isMobile$}calcStats(){this.data=Object.assign(Object.assign({},this.data),{stats:this.calcs.calcStats(this.data)}),this.cdr.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(a.h),a.Mb(b),a.Mb(S))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-stats"]],decls:3,vars:3,consts:function(){let t,e,i,n,a;return t=$localize`${"\ufffd#3\ufffd"}:START_TAG_SPAN:Вес: ${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:${"\ufffd#4\ufffd"}:START_TAG_MAT_FORM_FIELD:${"\ufffd#5\ufffd\ufffd/#5\ufffd"}:TAG_INPUT:${"\ufffd/#4\ufffd"}:CLOSE_TAG_MAT_FORM_FIELD:`,e=$localize`${"\ufffd#10\ufffd"}:START_TAG_SPAN:Коэффициент: ${"\ufffd/#10\ufffd"}:CLOSE_TAG_SPAN:${"\ufffd0\ufffd"}:INTERPOLATION:`,i=$localize`${"\ufffd#31\ufffd"}:START_TAG_SPAN:Для набора: ${"\ufffd/#31\ufffd"}:CLOSE_TAG_SPAN:${"\ufffd0\ufffd"}:INTERPOLATION: `,n=$localize`${"\ufffd#35\ufffd"}:START_TAG_SPAN:Для поддержания: ${"\ufffd/#35\ufffd"}:CLOSE_TAG_SPAN:${"\ufffd0\ufffd"}:INTERPOLATION: `,a=$localize`${"\ufffd#39\ufffd"}:START_TAG_SPAN:Для похудения: ${"\ufffd/#39\ufffd"}:CLOSE_TAG_SPAN:${"\ufffd0\ufffd"}:INTERPOLATION:${"\ufffd#41\ufffd\ufffd/#41\ufffd"}:LINE_BREAK: ${"\ufffd1\ufffd"}:INTERPOLATION_1: `,[[4,"ngIf"],t,[1,"example-form-field"],["matInput","","type","number",3,"ngModel","ngModelChange"],[1,"w-stats__block"],[1,"w-stats__coeff"],e,[3,"vertical","change"],["group","matButtonToggleGroup"],["value","1.2","aria-label","\u041f\u0430\u0441\u0441\u0438\u0432\u043d\u044b\u0439","title","C\u0438\u0434\u044f\u0447\u044f\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0438 \u043c\u0430\u043b\u043e\u043f\u043e\u0434\u0432\u0438\u0436\u043d\u044b\u0439 \u043e\u0431\u0440\u0430\u0437 \u0436\u0438\u0437\u043d\u0438"],[1,"w_wrappable"],["value","1.37","aria-label","\u0423\u043c\u0435\u0440\u0435\u043d\u043d\u0430\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c","title","\u0421\u043f\u043e\u0440\u0442 \u043f\u0430\u0440\u0443 \u0440\u0430\u0437 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e, \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0437\u0430\u0440\u044f\u0434\u043a\u0438, \u043f\u0435\u0448\u0438\u0435 \u043f\u0440\u043e\u0433\u0443\u043b\u043a\u0438"],["value","1.55","aria-label","\u0418\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u044b\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f","title","\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 3-4 \u0440\u0430\u0437\u0430 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e"],["value","1.7","aria-label","\u041e\u0447\u0435\u043d\u044c \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u044b\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f","title","\u0421\u043f\u043e\u0440\u0442 5-6 \u0440\u0430\u0437 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e"],["value","1.9","aria-label","\u041e\u0447\u0435\u043d\u044c \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u044b\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f","title","\u0422\u044f\u0436\u0435\u043b\u044b\u0439 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0442\u0440\u0443\u0434, \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u044b\u0435 \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438"],[1,"w-stats__info"],i,[1,"w-stats__fixed"],n,a]},template:function(t,e){1&t&&(a.wc(0,C,43,22,"div",0),a.ic(1,"async"),a.Nb(2,"mat-divider")),2&t&&a.nc("ngIf",a.jc(1,1,e.isMobile$))},directives:[n.k,m.a,w.b,v.a,$.i,$.a,$.f,$.h,M.b,M.a],pipes:[n.b,T,A],styles:[".w-stats__fixed[_ngcontent-%COMP%]{display:inline-block;min-width:150px}.w-stats__coeff[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row-reverse;margin:10px 0}.w-stats__coeff._mobile[_ngcontent-%COMP%]{flex-direction:column-reverse;display:inline-flex;flex:1 1 clap(50px,50%,100%)}.w-stats__info._mobile[_ngcontent-%COMP%]{padding:10px;display:inline-block;flex:1 0 45%}.w-stats__block._mobile[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.w_wrappable[_ngcontent-%COMP%]{word-wrap:break-word}"],changeDetection:0}),t})();const x=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Gb({type:t,selectors:[["app-kkal"]],decls:1,vars:0,template:function(t,e){1&t&&a.Nb(0,"app-stats")},directives:[R],styles:[""]}),t})()}];let O=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[r.c.forChild(x)],r.c]}),t})(),I=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[n.c,O,s,o,c.a]]}),t})()}}]);