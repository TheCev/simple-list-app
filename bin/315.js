"use strict";(self.webpackChunksimple_list=self.webpackChunksimple_list||[]).push([[315],{1315:(y,l,r)=>{r.r(l),r.d(l,{LoginModule:()=>T});var u=r(8583),m=r(4655),e=r(3679),n=r(7716),c=r(89),s=r(8295),g=r(9983),p=r(6627),d=r(1095);function f(t,a){1&t&&(n.TgZ(0,"mat-error"),n._uU(1,"Username require min 6 characters"),n.qZA())}function h(t,a){1&t&&(n.TgZ(0,"mat-error"),n._uU(1,"Password require min 6 characters"),n.qZA())}const Z=[{path:"",component:(()=>{class t{constructor(o,i){this.authSvc=o,this.router=i,this.login=new e.cw({username:new e.NI("",[e.kI.required,e.kI.minLength(6)]),password:new e.NI("",[e.kI.required,e.kI.minLength(6)])})}checkUsernameInput(){const o=this.login.get("username");return o.hasError("minlength")&&o.dirty}checkPasswordInput(){const o=this.login.get("password");return o.hasError("minlength")&&o.dirty}onLogin(){this.authSvc.login(this.login.value).subscribe(i=>{i&&this.router.navigate(["/lists"])})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(c.e),n.Y36(m.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:23,vars:4,consts:[[1,"container"],[1,"title"],["action","",3,"formGroup","ngSubmit"],["appearance","fill","color","primary"],["type","text","matInput","","placeholder","Username","formControlName","username"],["matPrefix",""],[4,"ngIf"],["appearance","fill"],["type","password","matInput","","placeholder","Password","formControlName","password"],["mat-flat-button","","color","primary",3,"disabled"],["routerLink","/join",1,"link"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"h2",1),n._uU(2,"Log in to your Account"),n.qZA(),n.qZA(),n.TgZ(3,"form",2),n.NdJ("ngSubmit",function(){return i.onLogin()}),n.TgZ(4,"div",0),n.TgZ(5,"mat-form-field",3),n.TgZ(6,"mat-label"),n._uU(7,"Username*"),n.qZA(),n._UZ(8,"input",4),n.TgZ(9,"mat-icon",5),n._uU(10,"person"),n.qZA(),n.qZA(),n.YNc(11,f,2,0,"mat-error",6),n.TgZ(12,"mat-form-field",7),n.TgZ(13,"mat-label"),n._uU(14,"Password*"),n.qZA(),n._UZ(15,"input",8),n.TgZ(16,"mat-icon",5),n._uU(17,"lock"),n.qZA(),n.qZA(),n.YNc(18,h,2,0,"mat-error",6),n.TgZ(19,"button",9),n._uU(20,"Submit"),n.qZA(),n.TgZ(21,"a",10),n._uU(22,"Don't you have an account?"),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(3),n.Q6J("formGroup",i.login),n.xp6(8),n.Q6J("ngIf",i.checkUsernameInput()),n.xp6(7),n.Q6J("ngIf",i.checkPasswordInput()),n.xp6(1),n.Q6J("disabled",!i.login.valid))},directives:[e.Y7,e.JL,e.sg,s.KE,s.hX,g.Nt,e.Fj,e.JJ,e.u,p.Hw,s.qo,u.O5,d.lW,m.yS,s.TO],styles:[".container[_ngcontent-%COMP%]{width:90%;display:flex;flex-direction:column;align-items:center;margin:1rem auto}.title[_ngcontent-%COMP%]{text-align:center}.link[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:5rem}"]}),t})()}];let L=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[m.Bz.forChild(Z)],m.Bz]}),t})();var v=r(3806);let T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[u.ez,L,v.q,e.UX]]}),t})()}}]);