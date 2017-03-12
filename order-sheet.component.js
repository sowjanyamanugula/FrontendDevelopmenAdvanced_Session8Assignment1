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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var OrderSheetComponent = (function () {
    function OrderSheetComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.buildForm();
    }
    OrderSheetComponent.prototype.buildForm = function () {
        this.orderSheetForm = this.formBuilder.group({
            customerName: this.formBuilder.control(null, [forms_1.Validators.required, forms_1.Validators.minLength(2)]),
            userName: this.formBuilder.control(null, [forms_1.Validators.required, forms_1.Validators.minLength(2)]),
            email: this.formBuilder.control(null, forms_1.Validators.required),
            Mobile: this.formBuilder.control(null, forms_1.Validators.required),
            Password: this.formBuilder.control(null, forms_1.Validators.required),
            ConfirmPassword: this.formBuilder.control(null, forms_1.Validators.required)
        });
        this.customerNameControl = this.orderSheetForm.get('customerName');
        this.userNameControl = this.orderSheetForm.get('userName');
        this.emailControl = this.orderSheetForm.get('email');
        this.MobileControl = this.orderSheetForm.get('Mobile');
        this.PasswordControl = this.orderSheetForm.get('Password');
        this.ConfirmPasswordControl = this.orderSheetForm.get('Password');
    };
    OrderSheetComponent.prototype.onResetForm = function () {
        this.orderSheetForm.reset();
    };
    OrderSheetComponent.prototype.onSubmitForm = function () {
        console.log(this.orderSheetForm.value);
    };
    OrderSheetComponent = __decorate([
        core_1.Component({
            selector: 'order-sheet',
            templateUrl: 'app/counter/order-sheet/order-sheet.component.html',
            styleUrls: ['app/counter/order-sheet/order-sheet.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], OrderSheetComponent);
    return OrderSheetComponent;
}());
exports.OrderSheetComponent = OrderSheetComponent;
//# sourceMappingURL=order-sheet.component.js.map