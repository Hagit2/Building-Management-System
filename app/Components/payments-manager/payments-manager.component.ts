// import { Component } from '@angular/core';
// import { PaymentsService } from 'src/app/Services/payments.service';
// import { Payments } from 'src/app/Models/Payments';
// export interface PeriodicElement {
//   Family: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, Family: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, Family: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, Family: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, Family: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, Family: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, Family: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, Family: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, Family: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, Family: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, Family: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

// @Component({
//   selector: 'app-payments-manager',
//   templateUrl: './payments-manager.component.html',
//   styleUrls: ['./payments-manager.component.css']
// })
// export class PaymentsManagerComponent {
//   constructor( private _paymantService:PaymentsService) {}
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;

//   public payments: Array<Payments> | undefined;
//   ngOnInit() :void
//   { 
//    this.getAllPayments()
//   }
//   getAllPayments():void {
//     console.log("componnent")

//   this._paymantService.GetAllPayments().subscribe( data=>{
//     this.payments=data
    
//   }) 
// }
// }


import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payments } from 'src/app/Models/Payments';
import { PaymentsService } from 'src/app/Services/payments.service';


@Component({
  selector: 'app-payments-manager',
  templateUrl: './payments-manager.component.html',
  styleUrls: ['./payments-manager.component.css']
})
export class PaymentsManagerComponent implements OnInit {
  constructor(private _paymentService: PaymentsService
    ,private router:Router) {}

  displayedColumns: string[] = ['neighbors', 'isPayment', 'date', 'cost'];
  payments: Payments[] = [];

  ngOnInit(): void {
    this.getAllPayments();
  }

  getAllPayments(): void {
    debugger
    this._paymentService.getAllPayments().subscribe(data => {
      console.log(data)
      this.payments = data;
      console.log(this.payments)
      console.log(this.payments[0]);    }); 
  }

  addDebt() {
    this.router.navigate(['admin/payment/debt']); 

  }
}
