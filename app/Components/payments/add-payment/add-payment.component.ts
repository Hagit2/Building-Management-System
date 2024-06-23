import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Payments } from 'src/app/Models/Payments';
import { PaymentsService } from 'src/app/Services/payments.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  @Input() data: { element: Payments } | undefined; // Receive data from parent component
  submitted = false; // Flag for error display
  total = 0;
  paymentForm!: FormGroup; // Form group for payment details
  
  constructor(private _paymentsService: PaymentsService,
              public dialogRef: MatDialogRef<AddPaymentComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: { element: Payments } ,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.dialogData.element == null) {
      this.total = this._paymentsService.totalAmount;
    } else {
      this.total = this.dialogData.element.cost;
    }
    console.log(this.total);

    // Initialize the form group with validators
    // this.paymentForm = this.fb.group({
    //   cardholderName: ['', [Validators.required, Validators.minLength(2)]],
    //   cardNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
    //   expiryMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
    //   expiryYear: ['', [Validators.required, Validators.min(2024)]],
    //   cvcCode: ['', [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]]
    // });
  }

  getErrorMessage(control: FormControl): string {
    if (control.hasError('required')) {
      return 'שדה חובה';
    } else if (control.hasError('minlength')) {
      return 'ערך קצר מדי (מינימום 2 תווים)';
    } else if (control.hasError('pattern')) {
      return 'פורמט לא תקין'; // Adjust message based on specific validation pattern
    } else if (!control.value) { // Check for nullish value
      return ''; // Return empty string if control value is null or undefined
    }
    // Add checks for other potential errors as needed
    return '';
  }

  onSubmit() {
   debugger
      // Close the dialog
      this.dialogRef.close();
  
  }
}
