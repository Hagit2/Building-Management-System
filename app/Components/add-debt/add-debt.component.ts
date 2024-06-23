import { NgModule } from '@angular/core';


import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Payments } from '../../Models/Payments';
import { Neighbors } from 'src/app/Models/Neighbors';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PaymentsService } from 'src/app/Services/payments.service';
import { MessageService } from 'src/app/Services/message.service';
import { NeighborsService } from 'src/app/Services/neighbors.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-debt',
  templateUrl: './add-debt.component.html',
  styleUrls: ['./add-debt.component.css']
})
export class AddDebtComponent {

  neighbor: Neighbors = {
    _id: 0,
    lastName: '',
    apartmentNum: 0,
    numPersons: 0,
    
  };

  constructor(private _snackBar: MatSnackBar,
    private _paymentsService:PaymentsService,
    private _messageService:MessageService,
    private _neighborsService:NeighborsService,
    private router:Router) {}
 // neighbors: Neighbors[] = [];
 
  openSnackBar(amount: string, date: string) {
    const amountAdd = parseFloat(amount); // ממיר מחרוזת למספר
    const dateAdd = new Date(date); // ממיר מחרוזת לתאריך
    // this._messageService.Post().subscribe(response => {
     //שליחת הודעה לכל השכנים על תשלום חדש
    // });
    this._neighborsService.GetAllNeighbors().subscribe((data: any)=>{
      let iterationCount = 0;
      for (let neighbor of data){
        iterationCount++;
        console.log(neighbor)
        let payment: Payments = {
          // id: 0, // לא ברור מאיפה מתקבל ערך זה, ייתכן שתרצה להשוותו לערך כלשהו מהנתונים
          // neighbors: this.neighbor,
          neighborsId: iterationCount,
          isPaymetnet: false,
          date: dateAdd,
          cost: amountAdd // סכום התשלום
          ,
          neighbors: 0
        };
        this._paymentsService.Post(payment).subscribe(payment=>{
         // console.log(data);
        })
      }
      
    });

    this._snackBar.open("The payment has been added successfully 😉");
    this.router.navigate(['admin']); 

  }
  // @Output() paymentAdded = new EventEmitter<Payments>();

  // paymentForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) {
  //   this.paymentForm = this.formBuilder.group({
  //     amount: ['', Validators.required],
  //     date: ['', Validators.required]
  //   });
  // }

  // onSubmit(): void {
  //   if (this.paymentForm.valid) {
  //     const newPayment: Payments = {
  //               id: 0,
  //               neighbors: 0,
  //               neighborsId: 0,
  //               isPaymetnet: false,
  //               date: this.paymentForm.value.date,
  //               cost: this.paymentForm.value.amount
  //             };
  //     this.paymentAdded.emit(newPayment);
  //     this.paymentForm.reset();
  //   }
  // }
}

