import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'order-sheet',
  templateUrl: 'app/counter/order-sheet/order-sheet.component.html',
  styleUrls: ['app/counter/order-sheet/order-sheet.component.css']
})
export class OrderSheetComponent {
  orderSheetForm: FormGroup;
 
  customerNameControl,emailControl, userNameControl,MobileControl,PasswordControl,ConfirmPasswordControl;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  
  private buildForm() {
    this.orderSheetForm = this.formBuilder.group({
      customerName: this.formBuilder.control(null, [Validators.required, Validators.minLength(2)]),
     userName: this.formBuilder.control(null, [Validators.required, Validators.minLength(2)]),
      email: this.formBuilder.control(null, Validators.required),
      Mobile: this.formBuilder.control(null, Validators.required),
      Password: this.formBuilder.control(null, Validators.required),
       ConfirmPassword: this.formBuilder.control(null, Validators.required)
    });
   
    this.customerNameControl = this.orderSheetForm.get('customerName');
    this.userNameControl = this.orderSheetForm.get('userName');
    this.emailControl = this.orderSheetForm.get('email');
     this.MobileControl = this.orderSheetForm.get('Mobile');
      this.PasswordControl = this.orderSheetForm.get('Password');
       this.ConfirmPasswordControl = this.orderSheetForm.get('Password');
  }

  

  onResetForm() {
    this.orderSheetForm.reset();
  }

  onSubmitForm() {
    console.log(this.orderSheetForm.value);
  }
}
