"use strict";(self.webpackChunksimple_list=self.webpackChunksimple_list||[]).push([[319],{3319:(_,g,o)=>{o.r(g),o.d(g,{ListsModule:()=>Y});var n=o(8583),p=o(4655),t=o(7716),h=o(1841),r=o(9765),d=o(5304),f=o(3173);let u=(()=>{class e{constructor(i,s){this.http=i,this.api=s,this.addListEvent=new r.xQ,this.apiUrl=this.api.apiUrl,this.token=this.api.getToken(),this.httpOptions={headers:new h.WM({Authorization:"Bearer "+this.token})}}sendAddListEvent(){this.addListEvent.next()}getAddListEvent(){return this.addListEvent.asObservable()}sendList(i,s){return this.http.post(`${this.apiUrl}/lists/`,{title:s,userId:i},this.httpOptions).pipe((0,d.K)(Z=>this.api.handleError(Z)))}getLists(i){return this.http.get(`${this.apiUrl}/lists/user/${i}`,this.httpOptions).pipe((0,d.K)(s=>this.api.handleError(s)))}deleteList(i){return this.http.delete(`${this.apiUrl}/lists/${i}`,this.httpOptions).pipe((0,d.K)(s=>this.api.handleError(s)))}editList(i,s){return this.http.put(`${this.apiUrl}/lists/${i}`,{title:s},this.httpOptions)}}return e.\u0275fac=function(i){return new(i||e)(t.LFG(h.eN),t.LFG(f.Q))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var c=o(2238),m=o(1095);let T=(()=>{class e{constructor(i){this.dialogRef=i}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(c.so))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-delete-dialog"]],decls:9,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-button","","color","warn",3,"mat-dialog-close"]],template:function(i,s){1&i&&(t.TgZ(0,"h1",0),t._uU(1,"Delete a List"),t.qZA(),t.TgZ(2,"div",1),t._uU(3,"Are you sure?."),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"button",3),t._uU(6,"Close"),t.qZA(),t.TgZ(7,"button",4),t._uU(8,"Delete"),t.qZA(),t.qZA()),2&i&&(t.xp6(7),t.Q6J("mat-dialog-close",!0))},directives:[c.uh,c.xY,c.H8,m.lW,c.ZT],styles:[""]}),e})();var L=o(8295),v=o(9983);let A=(()=>{class e{constructor(i){this.dialogRef=i,this.onNoClick=()=>this.dialogRef.close()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(c.so))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-list-dialog"]],decls:11,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","","placeholder","Title"],["title",""],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","",3,"mat-dialog-close"]],template:function(i,s){if(1&i&&(t.TgZ(0,"h2",0),t._uU(1,"Create a New To Do List"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"mat-form-field"),t._UZ(4,"input",2,3),t.qZA(),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return s.onNoClick()}),t._uU(8,"Cancel"),t.qZA(),t.TgZ(9,"button",6),t._uU(10,"Add"),t.qZA(),t.qZA()),2&i){const l=t.MAs(5);t.xp6(9),t.Q6J("mat-dialog-close",l.value)}},directives:[c.uh,c.xY,L.KE,v.Nt,c.H8,m.lW,c.ZT],styles:[""]}),e})(),b=(()=>{class e{constructor(i){this.dialogRef=i,this.onNoClick=()=>this.dialogRef.close()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(c.so))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit-list-dialog"]],decls:11,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","","placeholder","Insert New Title"],["title",""],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","",3,"mat-dialog-close"]],template:function(i,s){if(1&i&&(t.TgZ(0,"h2",0),t._uU(1,"Edit a List"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"mat-form-field"),t._UZ(4,"input",2,3),t.qZA(),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return s.onNoClick()}),t._uU(8,"Cancel"),t.qZA(),t.TgZ(9,"button",6),t._uU(10,"Edit"),t.qZA(),t.qZA()),2&i){const l=t.MAs(5);t.xp6(9),t.Q6J("mat-dialog-close",l.value)}},directives:[c.uh,c.xY,L.KE,v.Nt,c.H8,m.lW,c.ZT],styles:[""]}),e})();var x=o(5319),M=o(2794),C=o(9992),O=o(7991),D=o(4885);function E(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"div",5),t.TgZ(1,"button",6),t.TgZ(2,"div",7),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"app-options-button",8),t.NdJ("deleteItem",function(l){return t.CHM(i),t.oxw(2).openDeleteDialog(l)})("editItem",function(l){return t.CHM(i),t.oxw(2).openEditDialog(l)}),t.qZA(),t.qZA()}if(2&e){const i=a.$implicit;t.xp6(1),t.MGl("routerLink","tasks/",i.id,""),t.xp6(2),t.Oqu(i.title),t.xp6(1),t.Q6J("itemId",i.id)}}function I(e,a){1&e&&(t.TgZ(0,"mat-list-item",9),t.TgZ(1,"h5",10),t._uU(2,"There aren't lists"),t.qZA(),t.qZA())}function y(e,a){if(1&e&&(t.TgZ(0,"mat-action-list",2),t.YNc(1,E,5,3,"div",3),t.YNc(2,I,3,0,"mat-list-item",4),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.items),t.xp6(1),t.Q6J("ngIf",!i.items.length)}}function U(e,a){1&e&&t._UZ(0,"mat-spinner")}let P=(()=>{class e{constructor(i,s,l){this.listSvc=i,this.dialog=s,this.snackBar=l,this.subscriptions=new x.w,this.items=[],this.load=!1,this.addNewList()}openSnackBar(i){this.snackBar.open(i,"",{duration:3e3})}addNewList(){this.subscriptions.add(this.listSvc.getAddListEvent().subscribe(()=>{this.openAddListDialog()}))}deleteList(i){this.subscriptions.add(this.listSvc.deleteList(i).subscribe(()=>{this.getLists()}))}openAddListDialog(){const i=this.dialog.open(A,{width:"300px"});this.subscriptions.add(i.afterClosed().subscribe(s=>{if(s){const l=s,Z=JSON.parse(localStorage.getItem("user")).userId;this.listSvc.sendList(Z,l).subscribe(()=>{this.getLists()})}}))}openDeleteDialog(i){const s=this.dialog.open(T,{width:"300px"});this.subscriptions.add(s.afterClosed().subscribe(l=>{!0===l&&this.deleteList(i)}))}openEditDialog(i){const s=this.dialog.open(b,{width:"300px"});this.subscriptions.add(s.afterClosed().subscribe(l=>{l&&this.editList(i,l)}))}editList(i,s){this.subscriptions.add(this.listSvc.editList(i,s).subscribe(()=>{this.getLists()}))}getLists(){const i=JSON.parse(localStorage.getItem("user")).userId;this.load=!1,this.subscriptions.add(this.listSvc.getLists(i).subscribe(s=>{this.items=s,this.load=!0}))}ngOnInit(){this.getLists()}ngOnDestroy(){this.subscriptions.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(u),t.Y36(c.uw),t.Y36(M.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list"]],decls:2,vars:2,consts:[["class","container",4,"ngIf"],[4,"ngIf"],[1,"container"],["class","flexbox",4,"ngFor","ngForOf"],["disabled","",4,"ngIf"],[1,"flexbox"],["mat-list-item","",3,"routerLink"],[1,"mat-list-item-text"],[3,"itemId","deleteItem","editItem"],["disabled",""],[2,"text-align","center"]],template:function(i,s){1&i&&(t.YNc(0,y,3,2,"mat-action-list",0),t.YNc(1,U,1,0,"mat-spinner",1)),2&i&&(t.Q6J("ngIf",s.load),t.xp6(1),t.Q6J("ngIf",!s.load))},directives:[n.O5,C.i$,n.sg,C.Tg,p.rH,O.A,D.$g],styles:[".mat-icon-button[_ngcontent-%COMP%]{display:inline-block}.mat-list-item[_ngcontent-%COMP%]{display:inline-block}.flexbox[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:between}.mat-spinner[_ngcontent-%COMP%]{margin:1rem auto}.mat-list-item-text[_ngcontent-%COMP%]{font-size:20px}"]}),e})();var B=o(6627);let S=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-button"]],decls:3,vars:0,consts:[["mat-icon-button",""],["color","primary"]],template:function(i,s){1&i&&(t.TgZ(0,"button",0),t.TgZ(1,"mat-icon",1),t._uU(2,"add_circle"),t.qZA(),t.qZA())},directives:[m.lW,B.Hw],styles:[".mat-icon[_ngcontent-%COMP%]{font-size:4rem;margin-bottom:85px}.mat-icon-button[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:3rem}"]}),e})();const N=[{path:"",component:(()=>{class e{constructor(i){this.listSvc=i}handleAddList(){this.listSvc.sendAddListEvent()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(u))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-lists"]],decls:5,vars:0,consts:[[1,"container"],[1,"subtitle"],[3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"h2",1),t._uU(2,"To Do Lists "),t.qZA(),t._UZ(3,"app-list"),t.TgZ(4,"app-add-button",2),t.NdJ("click",function(){return s.handleAddList()}),t.qZA(),t.qZA())},directives:[P,S],styles:[".subtitle[_ngcontent-%COMP%]{font-size:2rem;text-align:center}.container[_ngcontent-%COMP%]{margin:1rem auto;width:90%;max-width:500px}.mat-icon-button[_ngcontent-%COMP%]{display:inline-block}.mat-list-item[_ngcontent-%COMP%]{display:inline-block}.flexbox[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:between}.mat-spinner[_ngcontent-%COMP%]{margin:1rem auto}.mat-list-item-text[_ngcontent-%COMP%]{font-size:20px}"]}),e})()},{path:"tasks/:listId",loadChildren:()=>o.e(106).then(o.bind(o,9106)).then(e=>e.TasksModule)}];let J=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(N)],p.Bz]}),e})();var F=o(3806),R=o(4466);let Y=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[n.ez,J,F.q,R.m]]}),e})()},7991:(_,g,o)=>{o.d(g,{A:()=>r});var n=o(7716),p=o(1095),t=o(5384),h=o(6627);let r=(()=>{class d{constructor(){this.deleteItem=new n.vpe,this.editItem=new n.vpe}onDelete(){this.deleteItem.emit(this.itemId)}onEdit(){this.editItem.emit(this.itemId)}}return d.\u0275fac=function(u){return new(u||d)},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-options-button"]],inputs:{itemId:"itemId"},outputs:{deleteItem:"deleteItem",editItem:"editItem"},decls:15,vars:1,consts:[["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","","color","warn",3,"click"]],template:function(u,c){if(1&u&&(n.TgZ(0,"button",0),n.TgZ(1,"mat-icon"),n._uU(2,"more_horiz"),n.qZA(),n.qZA(),n.TgZ(3,"mat-menu",null,1),n.TgZ(5,"button",2),n.NdJ("click",function(){return c.onEdit()}),n.TgZ(6,"mat-icon"),n._uU(7,"create"),n.qZA(),n.TgZ(8,"span"),n._uU(9,"Edit"),n.qZA(),n.qZA(),n.TgZ(10,"button",2),n.NdJ("click",function(){return c.onDelete()}),n.TgZ(11,"mat-icon"),n._uU(12,"delete_outlined"),n.qZA(),n.TgZ(13,"span"),n._uU(14,"Delete"),n.qZA(),n.qZA(),n.qZA()),2&u){const m=n.MAs(4);n.Q6J("matMenuTriggerFor",m)}},directives:[p.lW,t.p6,h.Hw,t.VK,t.OP],styles:[""]}),d})()},4466:(_,g,o)=>{o.d(g,{m:()=>h});var n=o(8583),p=o(3806),t=o(7716);let h=(()=>{class r{}return r.\u0275fac=function(f){return new(f||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[n.ez,p.q]]}),r})()}}]);