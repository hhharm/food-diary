(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/2RN":function(t,o,e){"use strict";e.r(o),e.d(o,"DashboardModule",function(){return E});var n=e("ofXK"),c=e("tyNb"),l=e("fXoL"),a=e("bTqV"),r=e("kmnG"),i=e("qFsG"),b=e("3Pt+"),d=e("NFeN"),s=e("+0xr");const m=new Map([["PROTEIN","\u0431\u0435\u043b\u043e\u043a"],["CARBS","\u0443\u0433\u043b\u0435\u0432\u043e\u0434\u044b"],["FATS","\u0436\u0438\u0440\u044b"],["FIBER","\u043a\u043b\u0435\u0442\u0447\u0430\u0442\u043a\u0430"],["NYAMNYAM","\u0432\u043a\u0443\u0441\u043d\u044f\u0448\u043a\u0430"],["WATER","\u0432\u043e\u0434\u0430"]]);let u=(()=>{class t{transform(t,...o){const e=[];return m.forEach((o,n)=>{t[n]&&e.push(o)}),e.join(", ")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=l.Lb({name:"parseFood",type:t,pure:!0}),t})();function f(t,o){if(1&t){const t=l.Tb();l.Sb(0,"button",25),l.fc("click",function(){return l.qc(t),l.hc().comment=""}),l.Sb(1,"mat-icon"),l.xc(2,"close"),l.Rb(),l.Rb()}}function g(t,o){1&t&&(l.Sb(0,"th",37),l.Wb(1,38),l.Rb())}function _(t,o){if(1&t&&(l.ac(0,40,1),l.Qb(1),l.Nb(2,"br"),l.Nb(3,"span",42),l.Pb(),l.Yb()),2&t){const t=l.hc().$implicit;l.Cb(3),l.Zb(t.timeDifference),l.Xb(0)}}function p(t,o){if(1&t&&(l.Sb(0,"td",39),l.ac(1,40),l.ic(2,"date"),l.wc(3,_,4,1,"ng-container",41),l.Yb(),l.Rb()),2&t){const t=o.$implicit;l.Cb(3),l.nc("ngIf",t.timeDifference),l.Zb(l.kc(2,2,t.date,"dd.MM.yyyy HH:mm:ss")),l.Xb(1)}}function R(t,o){1&t&&(l.Sb(0,"th",37),l.Wb(1,43),l.Rb())}function h(t,o){if(1&t&&(l.Sb(0,"td",44),l.Wb(1,45),l.ic(2,"parseFood"),l.Rb()),2&t){const t=o.$implicit;l.Cb(2),l.Zb(l.jc(2,1,t.food)),l.Xb(1)}}function C(t,o){1&t&&(l.Sb(0,"th",37),l.Wb(1,46),l.Rb())}function S(t,o){if(1&t&&(l.Sb(0,"td",39),l.Wb(1,47),l.Rb()),2&t){const t=o.$implicit;l.Eb("_bold","\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0440\u0438\u0451\u043c \u043f\u0438\u0449\u0438"===t.mealType),l.Cb(1),l.Zb(t.mealType),l.Xb(1)}}function T(t,o){1&t&&(l.Sb(0,"th",37),l.Wb(1,48),l.Rb())}function w(t,o){if(1&t&&(l.Sb(0,"td",44),l.xc(1),l.Rb()),2&t){const t=o.$implicit;l.Cb(1),l.zc(" ",t.commentary," ")}}function O(t,o){1&t&&l.Nb(0,"tr",49)}function N(t,o){1&t&&l.Nb(0,"tr",50)}function A(t,o){if(1&t&&(l.Sb(0,"table",26),l.Qb(1,27),l.wc(2,g,2,0,"th",28),l.wc(3,p,4,5,"td",29),l.Pb(),l.Qb(4,30),l.wc(5,R,2,0,"th",28),l.wc(6,h,3,3,"td",31),l.Pb(),l.Qb(7,32),l.wc(8,C,2,0,"th",28),l.wc(9,S,2,3,"td",33),l.Pb(),l.Qb(10,34),l.wc(11,T,2,0,"th",28),l.wc(12,w,2,1,"td",31),l.Pb(),l.wc(13,O,1,0,"tr",35),l.wc(14,N,1,0,"tr",36),l.Rb()),2&t){const t=l.hc();l.nc("dataSource",t.log),l.Cb(13),l.nc("matHeaderRowDef",t.displayedColumns),l.Cb(1),l.nc("matRowDefColumns",t.displayedColumns)}}const M="dairyRecords";let P=(()=>{class t{constructor(t){this.cdr=t,this.log=[],this.saveDisabled=!0,this.comment=" ",this.displayedColumns=["Date","Food","MealType","Commentary"]}ngOnInit(){const t=localStorage.getItem(M);this.log=t?JSON.parse(t):[],this.log.forEach(t=>{t.date=new Date(t.date)}),this.cdr.markForCheck()}toggle(t){this.tmpRecord||(this.tmpRecord={date:new Date,food:{CARBS:!1,FATS:!1,FIBER:!1,NYAMNYAM:!1,PROTEIN:!1,WATER:!1},mealType:"",timeDifference:null}),this.tmpRecord.food[t]=!this.tmpRecord.food[t],this.saveDisabled=!Object.values(this.tmpRecord.food).filter(Boolean).length,this.cdr.markForCheck()}save(){var t;this.tmpRecord&&(this.tmpRecord.date=new Date,this.tmpRecord.mealType=(t=this.tmpRecord.food).PROTEIN&&t.FIBER&&t.CARBS&&t.FATS?"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0440\u0438\u0451\u043c \u043f\u0438\u0449\u0438":"\u041f\u0435\u0440\u0435\u043a\u0443\u0441",this.tmpRecord.commentary=this.comment,this.tmpRecord.timeDifference=this.log.length?((t,o)=>{const e=Math.floor((t.getTime()-o.getTime())/6e4),n=Math.floor(e/60),c=Math.floor(e)%60;if(t.getDate()!==o.getDate()&&n>10||0===n&&0===c)return null;const l=0===n?"":1===n?" \u0447\u0430\u0441, ":n>4?" \u0447\u0430\u0441\u043e\u0432, ":" \u0447\u0430\u0441\u0430, ";return`\u0441\u043f\u0443\u0441\u0442\u044f ${l?n+l:""} ${c} ${1===c?" \u043c\u0438\u043d\u0443\u0442\u0443":c>4||0===c?" \u043c\u0438\u043d\u0443\u0442":" \u043c\u0438\u043d\u0443\u0442\u044b"}`})(this.tmpRecord.date,this.log[this.log.length-1].date):null,this.log=[this.tmpRecord,...this.log],this.saveDisabled=!0,localStorage.setItem(M,JSON.stringify(this.log)),this.tmpRecord=null,this.comment=" ",this.cdr.markForCheck())}undo(){this.log.length&&(this.log.shift(),this.log=[...this.log],localStorage.setItem(M,JSON.stringify(this.log)),this.cdr.markForCheck())}clear(){this.log=[],localStorage.removeItem(M),this.cdr.markForCheck()}trackByDateFn(t,o){return o.date}}return t.\u0275fac=function(o){return new(o||t)(l.Mb(l.h))},t.\u0275cmp=l.Gb({type:t,selectors:[["app-day-count"]],decls:35,vars:18,consts:function(){let t,o,e,n,c,l,a,r,i,b,d,s,m,u,f,g;return t=$localize` Белки `,o=$localize` Углеводы `,e=$localize` Жиры `,n=$localize` Клетчатка `,c=$localize` Вкусняшка `,l=$localize` Вода `,a=$localize`${"\ufffd#24\ufffd"}:START_TAG_MAT_ICON:offline_pin${"\ufffd/#24\ufffd"}:CLOSE_TAG_MAT_ICON:${"\ufffd#25\ufffd"}:START_TAG_SPAN:Добавить запись${"\ufffd/#25\ufffd"}:CLOSE_TAG_SPAN:`,r=$localize`${"\ufffd#28\ufffd"}:START_TAG_MAT_ICON:undo${"\ufffd/#28\ufffd"}:CLOSE_TAG_MAT_ICON:`,i=$localize`${"\ufffd#31\ufffd"}:START_TAG_MAT_ICON:clear${"\ufffd/#31\ufffd"}:CLOSE_TAG_MAT_ICON:`,b=$localize`Дата`,d=$localize` ${"\ufffd0\ufffd"}:INTERPOLATION: ${"\ufffd*3:1\ufffd\ufffd#1:1\ufffd"}:START_TAG_NG_CONTAINER:${"\ufffd#2:1\ufffd\ufffd/#2:1\ufffd"}:LINE_BREAK:${"\ufffd#3:1\ufffd"}:START_TAG_SPAN:${"\ufffd0:1\ufffd"}:INTERPOLATION_1:${"\ufffd/#3:1\ufffd"}:CLOSE_TAG_SPAN:${"\ufffd/#1:1\ufffd\ufffd/*3:1\ufffd"}:CLOSE_TAG_NG_CONTAINER:`,s=$localize`Еда`,m=$localize` ${"\ufffd0\ufffd"}:INTERPOLATION: `,u=$localize`Тип`,f=$localize` ${"\ufffd0\ufffd"}:INTERPOLATION: `,g=$localize`Заметки`,[[1,"dc__button-row"],["mat-raised-button","","color","protein",3,"click"],t,["mat-raised-button","","color","carbs",3,"click"],o,["mat-raised-button","","color","fats",3,"click"],e,["mat-raised-button","","color","fiber",3,"click"],n,["mat-raised-button","","color","yammi",3,"click"],c,["mat-raised-button","","color","water",3,"click"],l,[1,"example-form-field"],["matInput","","type","text",3,"ngModel","ngModelChange"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["mat-raised-button","","color","save",3,"disabled","click"],a,["mat-raised-button","","title","\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0437\u0430\u043f\u0438\u0441\u044c",3,"disabled","click"],r,["mat-raised-button","","title","\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443",3,"disabled","click"],i,[1,"dc_table"],["mat-table","",3,"dataSource",4,"ngIf"],[1,"dc_rule-buttons"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-table","",3,"dataSource"],["matColumnDef","Date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Food"],["mat-cell","","class","dc__record",4,"matCellDef"],["matColumnDef","MealType"],["mat-cell","",3,"_bold",4,"matCellDef"],["matColumnDef","Commentary"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],b,["mat-cell",""],d,[4,"ngIf"],[1,"_weak"],s,["mat-cell","",1,"dc__record"],m,u,f,g,["mat-header-row",""],["mat-row",""]]},template:function(t,o){1&t&&(l.Qb(0),l.Sb(1,"section"),l.Sb(2,"div",0),l.Sb(3,"button",1),l.fc("click",function(){return o.toggle("PROTEIN")}),l.Wb(4,2),l.Rb(),l.Sb(5,"button",3),l.fc("click",function(){return o.toggle("CARBS")}),l.Wb(6,4),l.Rb(),l.Sb(7,"button",5),l.fc("click",function(){return o.toggle("FATS")}),l.Wb(8,6),l.Rb(),l.Sb(9,"button",7),l.fc("click",function(){return o.toggle("FIBER")}),l.Wb(10,8),l.Rb(),l.Sb(11,"button",9),l.fc("click",function(){return o.toggle("NYAMNYAM")}),l.Wb(12,10),l.Rb(),l.Sb(13,"button",11),l.fc("click",function(){return o.toggle("WATER")}),l.Wb(14,12),l.Rb(),l.Nb(15,"br"),l.Sb(16,"mat-form-field",13),l.Sb(17,"mat-label"),l.xc(18,"\u0417\u0430\u043c\u0435\u0442\u043a\u0430: "),l.Rb(),l.Sb(19,"input",14),l.fc("ngModelChange",function(t){return o.comment=t}),l.Rb(),l.wc(20,f,3,0,"button",15),l.Rb(),l.Nb(21,"br"),l.Sb(22,"button",16),l.fc("click",function(){return o.save()}),l.ac(23,17),l.Nb(24,"mat-icon"),l.Nb(25,"span"),l.Yb(),l.Rb(),l.Sb(26,"button",18),l.fc("click",function(){return o.undo()}),l.ac(27,19),l.Nb(28,"mat-icon"),l.Yb(),l.Rb(),l.Sb(29,"button",20),l.fc("click",function(){return o.clear()}),l.ac(30,21),l.Nb(31,"mat-icon"),l.Yb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(32,"section",22),l.wc(33,A,15,3,"table",23),l.Rb(),l.Nb(34,"section",24),l.Pb()),2&t&&(l.Cb(3),l.Eb("_outline",null==o.tmpRecord||null==o.tmpRecord.food?null:o.tmpRecord.food.PROTEIN),l.Cb(2),l.Eb("_outline",null==o.tmpRecord||null==o.tmpRecord.food?null:o.tmpRecord.food.CARBS),l.Cb(2),l.Eb("_outline",null==o.tmpRecord||null==o.tmpRecord.food?null:o.tmpRecord.food.FATS),l.Cb(2),l.Eb("_outline",null==o.tmpRecord||null==o.tmpRecord.food?null:o.tmpRecord.food.FIBER),l.Cb(2),l.Eb("_outline",null==o.tmpRecord||null==o.tmpRecord.food?null:o.tmpRecord.food.NYAMNYAM),l.Cb(2),l.Eb("_outline",null==o.tmpRecord||null==o.tmpRecord.food?null:o.tmpRecord.food.WATER),l.Cb(6),l.nc("ngModel",o.comment),l.Cb(1),l.nc("ngIf",o.comment),l.Cb(2),l.nc("disabled",o.saveDisabled),l.Cb(4),l.nc("disabled",!o.log.length),l.Cb(3),l.nc("disabled",!o.log.length),l.Cb(4),l.nc("ngIf",o.log.length))},directives:[a.a,r.b,r.e,i.a,b.a,b.f,b.h,n.k,d.a,r.f,s.j,s.c,s.e,s.b,s.g,s.i,s.d,s.a,s.f,s.h],pipes:[n.e,u],styles:[".dc__button-row[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;flex-wrap:wrap}.dc__button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%]{margin:8px;border:2px solid #fff}.dc__button-row[_ngcontent-%COMP%]   .mat-button-base._outline[_ngcontent-%COMP%]{border-color:#77d249;box-shadow:1px 3px 3px 3px #d9dad9}.dc__button-row[_ngcontent-%COMP%]   .mat-button-base.mat-protein[_ngcontent-%COMP%]{background-color:#feffde;color:#2a056e}.dc__button-row[_ngcontent-%COMP%]   .mat-button-base.mat-carbs[_ngcontent-%COMP%]{background-color:#d1deff;color:#2a056e}.dc__button-row[_ngcontent-%COMP%]   .mat-button-base.mat-fats[_ngcontent-%COMP%]{background-color:#ffdada;color:#2a056e}.dc__button-row[_ngcontent-%COMP%]   .mat-button-base.mat-yammi[_ngcontent-%COMP%]{background-color:#fedeff;color:#2a056e}.dc__button-row[_ngcontent-%COMP%]   .mat-button-base.mat-fiber[_ngcontent-%COMP%]{background-color:#d0ffcb;color:#2a056e}.dc__button-row[_ngcontent-%COMP%]   .mat-button-base.mat-water[_ngcontent-%COMP%]{background-color:#6495ed;color:#fff}.dc__button-row[_ngcontent-%COMP%]   .mat-button-base.mat-save[_ngcontent-%COMP%]:not(.mat-button-disabled){background-color:#009018;color:#fff}.dc__record[_ngcontent-%COMP%]{padding:0 10px}._bold[_ngcontent-%COMP%]{font-weight:700}.dc_table[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;font-size:x-small}.dc_table[_ngcontent-%COMP%]   ._weak[_ngcontent-%COMP%]{font-style:italic;font-weight:lighter;color:grey}.dc_rule-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0}.dc_rule-buttons[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%]{margin:6px}"],changeDetection:0}),t})();const k=[{path:"**",component:(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l.Gb({type:t,selectors:[["app-dashboard"]],decls:1,vars:0,template:function(t,o){1&t&&l.Nb(0,"app-day-count")},directives:[P],styles:["[_nghost-%COMP%]{height:100%}"],changeDetection:0}),t})()}];let y=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(o){return new(o||t)},imports:[[c.c.forChild(k)],c.c]}),t})();var $=e("PCNd");let I=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(o){return new(o||t)},imports:[[n.c]]}),t})(),E=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(o){return new(o||t)},imports:[[n.c,$.a,y,I]]}),t})()}}]);