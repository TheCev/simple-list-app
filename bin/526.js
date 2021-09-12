"use strict";(self.webpackChunksimple_list=self.webpackChunksimple_list||[]).push([[526],{5429:(z,m,o)=>{o.r(m),o.d(m,{TasksModule:()=>Q});var d=o(8583),p=o(4655),g=o(5319),t=o(7716),T=o(1841),I=o(9765),c=o(5304),Z=o(3173);let k=(()=>{class e{constructor(s,i){this.http=s,this.api=i,this.addTaskEvent=new I.xQ,this.token=this.api.getToken(),this.apiUrl=this.api.apiUrl,this.httpOptions={headers:new T.WM({Authorization:"Bearer "+this.token})}}sendAddTaskEvent(){this.addTaskEvent.next()}getAddTaskEvent(){return this.addTaskEvent.asObservable()}getList(s){return this.http.get(`${this.apiUrl}/lists/${s}`,this.httpOptions).pipe((0,c.K)(i=>this.api.handleError(i)))}getTasks(s,i){return this.http.get(`${this.apiUrl}/tasks/user/${s}/list/${i}`,this.httpOptions).pipe((0,c.K)(a=>this.api.handleError(a)))}sendTask(s,i,a){return this.http.post(`${this.apiUrl}/tasks`,{userId:s,listId:i,title:a,state:!1},this.httpOptions)}deleteTask(s){return this.http.delete(`${this.apiUrl}/tasks/${s}`,this.httpOptions).pipe((0,c.K)(a=>this.api.handleError(a)))}changeState(s){return this.http.put(this.apiUrl+`/tasks/${s.id}/state`,s,this.httpOptions).pipe((0,c.K)(a=>this.api.handleError(a)))}editTask(s,i){return this.http.put(`${this.apiUrl}/tasks/${s}`,{title:i},this.httpOptions)}}return e.\u0275fac=function(s){return new(s||e)(t.LFG(T.eN),t.LFG(Z.Q))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=o(3679),r=o(2238),u=o(8295),f=o(9983),v=o(1095);function b(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"The title cannot be more than 40 characters"),t.qZA())}let x=(()=>{class e{constructor(s,i){this.dialogRef=s,this.fb=i,this.titleInput=new l.NI("",[l.kI.required,l.kI.maxLength(40)])}checkTitleInput(){return this.titleInput.hasError("maxlength")&&this.titleInput.dirty}onNoClick(){this.dialogRef.close()}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(r.so),t.Y36(l.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit-task-dialog"]],decls:11,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","","placeholder","Insert Task Title",3,"formControl"],[4,"ngIf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","",3,"mat-dialog-close","disabled"]],template:function(s,i){1&s&&(t.TgZ(0,"h2",0),t._uU(1,"Edit Task"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"mat-form-field"),t._UZ(4,"input",2),t.qZA(),t.YNc(5,b,2,0,"mat-error",3),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return i.onNoClick()}),t._uU(8,"Cancel"),t.qZA(),t.TgZ(9,"button",6),t._uU(10,"Edit Task"),t.qZA(),t.qZA()),2&s&&(t.xp6(4),t.Q6J("formControl",i.titleInput),t.xp6(1),t.Q6J("ngIf",i.checkTitleInput()),t.xp6(4),t.Q6J("mat-dialog-close",i.titleInput.value)("disabled",!i.titleInput.valid))},directives:[r.uh,r.xY,u.KE,f.Nt,l.Fj,l.JJ,l.oH,d.O5,r.H8,v.lW,r.ZT,u.TO],styles:[""]}),e})();function A(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"The title cannot be more than 40 characters"),t.qZA())}let _=(()=>{class e{constructor(s){this.dialogRef=s,this.titleInput=new l.NI("",[l.kI.required,l.kI.maxLength(40)])}onNoClick(){this.dialogRef.close()}checkTitleInput(){return this.titleInput.hasError("maxlength")&&this.titleInput.dirty}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(r.so))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-task-dialog"]],decls:11,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","","placeholder","Insert Task Title",3,"formControl"],[4,"ngIf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","",3,"mat-dialog-close","disabled"]],template:function(s,i){1&s&&(t.TgZ(0,"h2",0),t._uU(1,"Create a New Task"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"mat-form-field"),t._UZ(4,"input",2),t.qZA(),t.YNc(5,A,2,0,"mat-error",3),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return i.onNoClick()}),t._uU(8,"Cancel"),t.qZA(),t.TgZ(9,"button",6),t._uU(10,"Add Task"),t.qZA(),t.qZA()),2&s&&(t.xp6(4),t.Q6J("formControl",i.titleInput),t.xp6(1),t.Q6J("ngIf",i.checkTitleInput()),t.xp6(4),t.Q6J("mat-dialog-close",i.titleInput.value)("disabled",!i.titleInput.valid))},directives:[r.uh,r.xY,u.KE,f.Nt,l.Fj,l.JJ,l.oH,d.O5,r.H8,v.lW,r.ZT,u.TO],styles:[""]}),e})();var O=o(281),C=o(9992),U=o(2178);let y=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-progress-bar"]],inputs:{tasksDone:"tasksDone",totalTasks:"totalTasks"},decls:3,vars:2,consts:[[1,"text"],["mode","determinate","color","warn",3,"value"]],template:function(s,i){1&s&&(t.TgZ(0,"p",0),t._uU(1),t.qZA(),t._UZ(2,"mat-progress-bar",1)),2&s&&(t.xp6(1),t.Oqu(i.tasksDone+"/"+i.totalTasks||0),t.xp6(1),t.Q6J("value",i.tasksDone/i.totalTasks*100))},directives:[U.pW],styles:[""]}),e})();var D=o(7991),S=o(4885);function E(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"mat-list-option",7),t.NdJ("click",function(){t.CHM(s);const a=n.$implicit;return t.oxw(2).changeState(a)}),t._uU(2),t.qZA(),t.TgZ(3,"app-options-button",8),t.NdJ("editItem",function(){t.CHM(s);const a=n.$implicit;return t.oxw(2).openEditTaskDialog(a.id)})("deleteItem",function(a){return t.CHM(s),t.oxw(2).deleteTask(a)}),t.qZA(),t.qZA()}if(2&e){const s=n.$implicit;t.xp6(1),t.s9C("selected",s.state),t.xp6(1),t.hij(" ",s.title," "),t.xp6(1),t.Q6J("itemId",s.id)}}function J(e,n){if(1&e&&(t.TgZ(0,"mat-selection-list",null,3),t.TgZ(2,"div",1),t._UZ(3,"app-progress-bar",4),t.qZA(),t.YNc(4,E,4,3,"div",5),t.qZA()),2&e){const s=t.MAs(1),i=t.oxw();t.xp6(3),t.Q6J("tasksDone",s.selectedOptions.selected.length)("totalTasks",i.tasks.length),t.xp6(1),t.Q6J("ngForOf",i.tasks)}}function N(e,n){1&e&&t._UZ(0,"mat-spinner")}let L=(()=>{class e{constructor(s,i,a){this.tasksSvc=s,this.route=i,this.dialog=a,this.load=!1,this.tasks=[],this.tasksDone=[],this.subscriptions=new g.w,this.subscriptions.add(this.tasksSvc.getAddTaskEvent().subscribe(()=>{this.openAddTaskDialog()}))}showTasks(){this.load=!1;const s=JSON.parse(localStorage.getItem("user")).userId;this.subscriptions.add(this.tasksSvc.getTasks(s,this.listId).subscribe(i=>{this.tasks=i,this.getTasksDone(),this.load=!0}))}openAddTaskDialog(){this.dialog.open(_,{width:"300px"}).afterClosed().subscribe(i=>{i?this.addNewTask(i):this.load=!0})}addNewTask(s){const i=JSON.parse(localStorage.getItem("user")).userId;this.load=!1,this.tasksSvc.sendTask(i,this.listId,s).subscribe(()=>{this.showTasks()})}deleteTask(s){this.load=!1,this.subscriptions.add(this.tasksSvc.deleteTask(s).subscribe(i=>{this.showTasks()}))}openEditTaskDialog(s){const i=this.dialog.open(x,{width:"300px"});this.subscriptions.add(i.afterClosed().subscribe(a=>{a&&this.editList(s,a)}))}editList(s,i){this.load=!1,this.subscriptions.add(this.tasksSvc.editTask(s,i).subscribe(()=>{this.showTasks()}))}ngOnInit(){this.showTasks()}ngOnDestroy(){this.subscriptions.unsubscribe()}getTasksDone(){this.tasksDone=this.tasks.filter(s=>s.state)}changeState(s){this.subscriptions.add(this.tasksSvc.changeState(s).subscribe())}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(k),t.Y36(p.gz),t.Y36(r.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list"]],inputs:{listId:"listId"},decls:4,vars:2,consts:[[4,"ngIf"],[1,"container"],[3,"click"],["tasksList",""],[3,"tasksDone","totalTasks"],["class","flexbox",4,"ngFor","ngForOf"],[1,"flexbox"],[3,"selected","click"],[3,"itemId","editItem","deleteItem"]],template:function(s,i){1&s&&(t.YNc(0,J,5,3,"mat-selection-list",0),t.YNc(1,N,1,0,"mat-spinner",0),t.TgZ(2,"div",1),t.TgZ(3,"app-add-button",2),t.NdJ("click",function(){return i.openAddTaskDialog()}),t.qZA(),t.qZA()),2&s&&(t.Q6J("ngIf",i.load),t.xp6(1),t.Q6J("ngIf",!i.load))},directives:[d.O5,O.L,C.Ub,y,d.sg,C.vS,D.A,S.$g],styles:[".container[_ngcontent-%COMP%]{width:90%;max-width:500px;margin:2rem auto}.flexbox[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mat-spinner[_ngcontent-%COMP%]{margin:1rem auto}.mat-list-option[_ngcontent-%COMP%]{font-size:20px}.text[_ngcontent-%COMP%]{font-size:18px}"]}),e})();const M=[{path:"",component:(()=>{class e{constructor(s,i){this.route=s,this.tasksSvc=i,this.list={title:""},this.subscriptions=new g.w,this.userId=JSON.parse(localStorage.getItem("user")).userId}getList(){this.tasksSvc.getList(this.listId).subscribe(s=>{this.list=s})}handleAddTask(){this.tasksSvc.sendAddTaskEvent()}ngOnInit(){this.route.params.subscribe(s=>{this.listId=s.listId,this.getList()})}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(p.gz),t.Y36(k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tasks"]],decls:5,vars:2,consts:[[1,"container"],[1,"list-title"],[3,"listId"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2),t.qZA(),t.qZA(),t.TgZ(3,"div",0),t._UZ(4,"app-list",2),t.qZA()),2&s&&(t.xp6(2),t.Oqu(i.list.title),t.xp6(2),t.Q6J("listId",i.listId))},directives:[L],styles:[".container[_ngcontent-%COMP%]{width:90%;max-width:500px;margin:2rem auto}.flexbox[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mat-spinner[_ngcontent-%COMP%]{margin:1rem auto}.list-title[_ngcontent-%COMP%]{font-size:30px;font-weigth:bold}.mat-list-option[_ngcontent-%COMP%]{font-size:20px}.text[_ngcontent-%COMP%]{font-size:18px}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(M)],p.Bz]}),e})();var F=o(3806),Y=o(4466),P=o(695);let Q=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,w,F.q,Y.m,P.ListsModule,l.UX]]}),e})()}}]);