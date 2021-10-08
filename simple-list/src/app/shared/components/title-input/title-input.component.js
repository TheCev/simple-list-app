"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleInputComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var TitleInputComponent = /** @class */ (function () {
    function TitleInputComponent() {
        this.title = new forms_1.FormControl('');
        /*sendTitle():void {
          this.title.emit(this.titleInput.value)
        }
      
        titleInput:FormControl = new FormControl('',[Validators.required, Validators.maxLength(40)])
      
       checkTitleInput():boolean {
      
          if(this.titleInput.hasError('maxlength') && this.titleInput.dirty){
              this.inputInvalid.emit(true)
              return true
          }else{
              this.inputInvalid.emit(false)
              return false
          }
          
        }*/
        //ngOnInit():void{
        //this.title = this.formGroupRoot.control.get('title') as FormControl
        // }
    }
    //@Output() title = new EventEmitter
    //@Output() inputInvalid = new EventEmitter
    TitleInputComponent.prototype.ngOnInit = function () {
        this.form.addControl('title', this.title);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup)
    ], TitleInputComponent.prototype, "form", void 0);
    TitleInputComponent = __decorate([
        core_1.Component({
            selector: 'app-title-input',
            template: "\n\t\t\t<mat-form-field>\n\t\t\t<input matInput #title formControl=\"title\" placeholder=\"Insert Title\" />\n\t\t\t</mat-form-field>\n\t\t<!--<mat-error *ngIf=\"checkTitleInput()\">The title cannot be more than 40 characters</mat-error>-->\n  ",
            styles: ['']
        })
    ], TitleInputComponent);
    return TitleInputComponent;
}());
exports.TitleInputComponent = TitleInputComponent;
