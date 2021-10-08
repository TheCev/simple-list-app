"use strict";(self.webpackChunksimple_list=self.webpackChunksimple_list||[]).push([[508],{2508:(Y,u,i)=>{i.r(u),i.d(u,{TasksModule:()=>E});var d=i(8583),p=i(4655),g=i(5319),t=i(7716),h=i(6866),r=i(2238),l=i(3679),m=i(8295),T=i(9983),k=i(1095);function C(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"The title cannot be more than 40 characters"),t.qZA())}let v=(()=>{class e{constructor(s,n){this.dialogRef=s,this.data=n,this.titleInput=new l.NI(this.data.oldTitle,[l.kI.required,l.kI.maxLength(40)])}checkTitleInput(){return this.titleInput.hasError("maxlength")&&this.titleInput.dirty}onNoClick(){this.dialogRef.close()}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(r.so),t.Y36(r.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit-task-dialog"]],decls:11,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","","placeholder","Insert Task Title",3,"formControl"],[4,"ngIf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","",3,"mat-dialog-close","disabled"]],template:function(s,n){1&s&&(t.TgZ(0,"h2",0),t._uU(1,"Edit Task"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"mat-form-field"),t._UZ(4,"input",2),t.qZA(),t.YNc(5,C,2,0,"mat-error",3),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.onNoClick()}),t._uU(8,"Cancel"),t.qZA(),t.TgZ(9,"button",6),t._uU(10,"Edit"),t.qZA(),t.qZA()),2&s&&(t.xp6(4),t.Q6J("formControl",n.titleInput),t.xp6(1),t.Q6J("ngIf",n.checkTitleInput()),t.xp6(4),t.Q6J("mat-dialog-close",n.titleInput.value)("disabled",!n.titleInput.valid))},directives:[r.uh,r.xY,m.KE,T.Nt,l.Fj,l.JJ,l.oH,d.O5,r.H8,k.lW,r.ZT,m.TO],styles:[""]}),e})();function b(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"The title cannot be more than 40 characters"),t.qZA())}let Z=(()=>{class e{constructor(s){this.dialogRef=s,this.titleInput=new l.NI("",[l.kI.required,l.kI.maxLength(40)])}onNoClick(){this.dialogRef.close()}checkTitleInput(){return this.titleInput.hasError("maxlength")&&this.titleInput.dirty}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(r.so))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-task-dialog"]],decls:11,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","","placeholder","Insert Task Title",3,"formControl"],[4,"ngIf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","",3,"mat-dialog-close","disabled"]],template:function(s,n){1&s&&(t.TgZ(0,"h2",0),t._uU(1,"Create a New Task"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"mat-form-field"),t._UZ(4,"input",2),t.qZA(),t.YNc(5,b,2,0,"mat-error",3),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.onNoClick()}),t._uU(8,"Cancel"),t.qZA(),t.TgZ(9,"button",6),t._uU(10,"Add"),t.qZA(),t.qZA()),2&s&&(t.xp6(4),t.Q6J("formControl",n.titleInput),t.xp6(1),t.Q6J("ngIf",n.checkTitleInput()),t.xp6(4),t.Q6J("mat-dialog-close",n.titleInput.value)("disabled",!n.titleInput.valid))},directives:[r.uh,r.xY,m.KE,T.Nt,l.Fj,l.JJ,l.oH,d.O5,r.H8,k.lW,r.ZT,m.TO],styles:[""]}),e})();var I=i(2794),x=i(281),f=i(9992),_=i(2178);let A=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-progress-bar"]],inputs:{tasksDone:"tasksDone",totalTasks:"totalTasks"},decls:3,vars:2,consts:[[1,"text"],["mode","determinate","color","warn",3,"value"]],template:function(s,n){1&s&&(t.TgZ(0,"p",0),t._uU(1),t.qZA(),t._UZ(2,"mat-progress-bar",1)),2&s&&(t.xp6(1),t.Oqu(n.tasksDone+"/"+n.totalTasks||0),t.xp6(1),t.Q6J("value",n.tasksDone/n.totalTasks*100))},directives:[_.pW],styles:[""]}),e})();var y=i(7991),D=i(4885);function O(e,o){if(1&e){const s=t.EpF();t.TgZ(0,"div",9),t.TgZ(1,"mat-list-option",10),t.NdJ("click",function(){t.CHM(s);const a=o.$implicit;return t.oxw(2).changeState(a)}),t._uU(2),t.qZA(),t.TgZ(3,"app-options-button",11),t.NdJ("editItem",function(){t.CHM(s);const a=o.$implicit;return t.oxw(2).openEditTaskDialog(a.id,a.title)})("deleteItem",function(a){return t.CHM(s),t.oxw(2).deleteTask(a)}),t.qZA(),t.qZA()}if(2&e){const s=o.$implicit;t.xp6(1),t.s9C("selected",s.state),t.xp6(1),t.hij(" ",s.title," "),t.xp6(1),t.Q6J("itemId",s.id)}}function S(e,o){if(1&e&&(t.TgZ(0,"mat-selection-list",4,5),t.TgZ(2,"div",6),t._UZ(3,"app-progress-bar",7),t.qZA(),t.YNc(4,O,4,3,"div",8),t.qZA()),2&e){const s=t.MAs(1),n=t.oxw();t.xp6(3),t.Q6J("tasksDone",s.selectedOptions.selected.length)("totalTasks",n.tasks.length),t.xp6(1),t.Q6J("ngForOf",n.tasks)}}function J(e,o){1&e&&t._UZ(0,"mat-spinner")}let M=(()=>{class e{constructor(s,n,a,c){this.tasksSvc=s,this.route=n,this.dialog=a,this.snackBar=c,this.load=!1,this.tasks=[],this.tasksDone=[],this.subscriptions=new g.w}showTasks(){this.load=!1;const s=JSON.parse(localStorage.getItem("user")).userId;this.subscriptions.add(this.tasksSvc.getTasks(s,this.listId).subscribe(n=>{this.tasks=n,this.getTasksDone(),this.load=!0}))}openSucessfullySnackBar(s){this.snackBar.open(s,"",{duration:3500,panelClass:["successfully-snack-bar"],verticalPosition:"bottom",horizontalPosition:"center"})}openAddTaskDialog(){this.dialog.open(Z,{width:"300px"}).afterClosed().subscribe(n=>{n?this.addNewTask(n):this.load=!0})}addNewTask(s){const n=JSON.parse(localStorage.getItem("user")).userId;this.load=!1,this.tasksSvc.sendTask(n,this.listId,s).subscribe(()=>{this.showTasks(),this.openSucessfullySnackBar("Has been Added a Task")})}deleteTask(s){const n=this.tasks.findIndex(a=>a.id===s);this.tasks.splice(n,1),this.subscriptions.add(this.tasksSvc.deleteTask(s).subscribe(a=>{this.openSucessfullySnackBar("Changes Saved, Has Been Deleted a Task")}))}openEditTaskDialog(s,n){const a=this.dialog.open(v,{width:"300px",data:{oldTitle:n}});this.subscriptions.add(a.afterClosed().subscribe(c=>{c&&this.editList(s,c)}))}editList(s,n){this.tasks.map(a=>{a.id===s&&(a.title=n)}),this.subscriptions.add(this.tasksSvc.editTask(s,n).subscribe(()=>{this.openSucessfullySnackBar("Changes Saved, Has been Edited a Task")}))}ngOnInit(){this.load=!1,this.subscriptions.add(this.route.data.subscribe(s=>{const n=s.tasks;this.tasks=n,this.load=!0,console.log(s),console.log(n),this.getTasksDone()}))}ngOnDestroy(){this.subscriptions.unsubscribe()}getTasksDone(){this.tasksDone=this.tasks.filter(s=>s.state)}changeState(s){this.subscriptions.add(this.tasksSvc.changeState(s).subscribe())}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(h.C),t.Y36(p.gz),t.Y36(r.uw),t.Y36(I.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list"]],inputs:{listId:"listId"},decls:4,vars:2,consts:[["color","warning",4,"ngIf"],[4,"ngIf"],[1,"container"],[3,"click"],["color","warning"],["tasksList",""],[1,"progress-bar"],[3,"tasksDone","totalTasks"],["class","flexbox",4,"ngFor","ngForOf"],[1,"flexbox"],[1,"list-item",3,"selected","click"],[3,"itemId","editItem","deleteItem"]],template:function(s,n){1&s&&(t.YNc(0,S,5,3,"mat-selection-list",0),t.YNc(1,J,1,0,"mat-spinner",1),t.TgZ(2,"div",2),t.TgZ(3,"app-add-button",3),t.NdJ("click",function(){return n.openAddTaskDialog()}),t.qZA(),t.qZA()),2&s&&(t.Q6J("ngIf",n.load),t.xp6(1),t.Q6J("ngIf",!n.load))},directives:[d.O5,x.L,f.Ub,A,d.sg,f.vS,y.A,D.$g],styles:[".container[_ngcontent-%COMP%]{width:90%;max-width:500px;margin:2rem auto}.flexbox[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mat-spinner[_ngcontent-%COMP%]{margin:1rem auto}.mat-list-option[_ngcontent-%COMP%]{font-size:20px}.text[_ngcontent-%COMP%]{font-size:18px}.progress-bar[_ngcontent-%COMP%]{margin-bottom:2rem}.list-item[_ngcontent-%COMP%]{heigth:auto;margin-top:10px;margin-bottom:10px}"]}),e})();const N=[{path:"",component:(()=>{class e{constructor(s,n){this.route=s,this.tasksSvc=n,this.subscriptions=new g.w}handleAddTask(){this.tasksSvc.sendAddTaskEvent()}ngOnInit(){this.subscriptions.add(this.route.data.subscribe(s=>{this.list=s.list}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(p.gz),t.Y36(h.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tasks"]],decls:5,vars:2,consts:[[1,"container"],[1,"list-title"],[3,"listId"]],template:function(s,n){1&s&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2),t.qZA(),t.qZA(),t.TgZ(3,"div",0),t._UZ(4,"app-list",2),t.qZA()),2&s&&(t.xp6(2),t.Oqu(n.list.title),t.xp6(2),t.Q6J("listId",n.list.id))},directives:[M],styles:[".container[_ngcontent-%COMP%]{width:90%;max-width:500px;margin:2rem auto}.flexbox[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mat-spinner[_ngcontent-%COMP%]{margin:1rem auto}.list-title[_ngcontent-%COMP%]{font-size:30px;font-weigth:bold}.mat-list-option[_ngcontent-%COMP%]{font-size:20px}.text[_ngcontent-%COMP%]{font-size:18px}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(N)],p.Bz]}),e})();var U=i(3806),L=i(4466),w=i(9470);let E=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,P,U.q,L.m,w.ListsModule,l.UX]]}),e})()}}]);