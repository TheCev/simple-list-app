"use strict";(self.webpackChunksimple_list=self.webpackChunksimple_list||[]).push([[256],{256:(A,l,r)=>{r.r(l),r.d(l,{JoinModule:()=>I});var u=r(8583),s=r(4655),o=r(3679);const d=t=>{const i=t.get("password"),n=t.get("repeatedPassword");return i.value===n.value?null:{notEqual:!0}};var e=r(7716),c=r(89),m=r(8295),p=r(9983),g=r(6627),f=r(1095);function h(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"The username require min 6 characters"),e.qZA())}function Z(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Insert a valid email"),e.qZA())}function J(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"The passwords must be the same"),e.qZA())}const T=[{path:"",component:(()=>{class t{constructor(n,a){this.authSvc=n,this.router=a,this.join=new o.cw({username:new o.NI("",[o.kI.required,o.kI.minLength(6)]),email:new o.NI("",[o.kI.email,o.kI.required]),password:new o.NI("",[o.kI.required,o.kI.minLength(6)]),repeatedPassword:new o.NI("",[o.kI.required,o.kI.minLength(6)])},{validators:d})}checkPasswords(){const n=this.join.get("password"),a=this.join.get("password");return this.join.hasError("notEqual")&&n.dirty&&a.dirty}checkUsername(){const n=this.join.get("username");return n.hasError("minlength")&&n.dirty}checkEmail(){const n=this.join.get("email");return n.hasError("email")&&n.dirty}onJoin(){const n=this.join.value;delete n.repeatedPassword,this.authSvc.join(n).subscribe(a=>{a&&this.router.navigate(["/login"])})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.e),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-join"]],decls:36,vars:5,consts:[[1,"container"],[1,"title"],[3,"formGroup","ngSubmit"],["appearance","fill","color","primary"],["type","text","matInput","","placeholder","Username","formControlName","username"],["matPrefix",""],[4,"ngIf"],["appearance","fill"],["type","email","matInput","","placeholder","Email","formControlName","email","required",""],["type","password","matInput","","placeholder","Password","formControlName","password","minlength","6","required",""],["type","password","matInput","","placeholder","Confirm Password","formControlName","repeatedPassword","minlength","6","required",""],["mat-flat-button","","color","primary",3,"disabled"],["routerLink","/login",1,"link"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"h2",1),e._uU(2," Create an Account "),e.qZA(),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return a.onJoin()}),e.TgZ(4,"div",0),e.TgZ(5,"mat-form-field",3),e.TgZ(6,"mat-label"),e._uU(7,"Username*"),e.qZA(),e._UZ(8,"input",4),e.TgZ(9,"mat-icon",5),e._uU(10,"person"),e.qZA(),e.qZA(),e.YNc(11,h,2,0,"mat-error",6),e.TgZ(12,"mat-form-field",7),e.TgZ(13,"mat-label"),e._uU(14,"Email*"),e.qZA(),e._UZ(15,"input",8),e.TgZ(16,"mat-icon",5),e._uU(17,"mail"),e.qZA(),e.qZA(),e.YNc(18,Z,2,0,"mat-error",6),e.TgZ(19,"mat-form-field",7),e.TgZ(20,"mat-label"),e._uU(21,"Password*"),e.qZA(),e._UZ(22,"input",9),e.TgZ(23,"mat-icon",5),e._uU(24,"lock"),e.qZA(),e.qZA(),e.TgZ(25,"mat-form-field",7),e.TgZ(26,"mat-label"),e._uU(27,"Confirm Password*"),e.qZA(),e._UZ(28,"input",10),e.TgZ(29,"mat-icon",5),e._uU(30,"lock"),e.qZA(),e.qZA(),e.YNc(31,J,2,0,"mat-error",6),e.TgZ(32,"button",11),e._uU(33,"Submit"),e.qZA(),e.TgZ(34,"a",12),e._uU(35,"do you have an account already?"),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(3),e.Q6J("formGroup",a.join),e.xp6(8),e.Q6J("ngIf",a.checkUsername()),e.xp6(7),e.Q6J("ngIf",a.checkEmail()),e.xp6(13),e.Q6J("ngIf",a.checkPasswords()),e.xp6(1),e.Q6J("disabled",!a.join.valid))},directives:[o.Y7,o.JL,o.sg,m.KE,m.hX,p.Nt,o.Fj,o.JJ,o.u,g.Hw,m.qo,u.O5,o.Q7,o.wO,f.lW,s.yS,m.TO],styles:[".container[_ngcontent-%COMP%]{width:90%;display:flex;flex-direction:column;align-items:center;margin:1rem auto}.title[_ngcontent-%COMP%]{text-align:center}.link[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:5rem}"]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(T)],s.Bz]}),t})();var v=r(3806);let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,w,v.q,o.UX]]}),t})()}}]);