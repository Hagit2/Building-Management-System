



// // @Component({
// //   selector: 'app-payments',
// //   templateUrl: './payments.component.html',
// //   styleUrls: ['./payments.component.css'],
// // })
// // export class PaymentsComponent implements OnInit {
// //   @ViewChild(MatTableDataSource) dataSource: MatTableDataSource<Payments>;
// //   displayedColumns: string[] = ['position', 'Date', 'Cost', 'IsPayment'];

// //   constructor(private paymentsService: PaymentsService) {}

// //   ngOnInit(): void {
// //     this.populateElementData();
// //   }

// //   populateElementData() {
// //     this.paymentsService.getPaymenttoOnrNeighbors(1) // Replace 1 with the actual neighbor ID
// //       .subscribe((neighborPayments: Payments[]) => {
// //         this.dataSource = new MatTableDataSource<Payments>(neighborPayments);
// //       });
// //   }

// //   addData() {
// //     const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
// //     // const newData = ELEMENT_DATA[randomElementIndex];
// //     this.dataSource.data = [...this.dataSource.data, newData]; // This might not be ideal for real-time data updates
// //   }

// //   removeData() {
// //     if (this.dataSource.data.length > 0) {
// //       this.dataSource.data.pop();
// //     }
// //   }
// // }



// // Removed unnecessary class and commented-out imports


// //   constructor(initialData: Payments[],private _paymentsService :PaymentsService) {
// //     super();
// //     this.setData(initialData);
// //   }

// //   connect(): Observable<Payments[]> {
// //     return this._dataStream;
// //   }

// //   disconnect() {}

// //   setData(data: Payments[]) {
// //     this._dataStream.next(data);
// //   }
// // }
// // function ngOnInit() {
// //   throw new Error('Function not implemented.');
// // }




// // import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
// // // import { MatTableDataSource } from '@angular/material/table';
// // import { Payments } from 'src/app/Models/Payments'; // Replace with your actual path
// // import { PaymentsService } from 'src/app/Services/payments.service'; // Replace with your actual path
// // import { NeighborsService } from 'src/app/Services/neighbors.service'; // Replace with your actual path
// // import { Neighbors } from 'src/app/Models/Neighbors';
// // // import {MatIconModule} from '@angular/material/icon';


// // @Component({
// //   selector: 'app-payments',
// //   templateUrl: './payments.component.html',
// //   styleUrls: ['./payments.component.css']
// // })
// // export class PaymentsComponent implements OnInit {
// //   displayedColumns: string[] = [ 'Date', 'Cost', 'IsPayment'];
// //  dataSource: Array<Payments>=[]

// //   constructor(private _paymentsService: PaymentsService,
// //      private changeDetector: ChangeDetectorRef, private  _neighborsService:NeighborsService,public dialog: MatDialog) {}
// // currentIdUser:number=0
// //   ngOnInit(): void {   
// //     // this.currentIdUser = (this._neighborsService.session as Neighbors).id; // Use with caution
// //     this.currentIdUser=1
// //     this.populateElementData();
 
        
    
   
    
// //   }

 
// //   populateElementData() {
// //     this._paymentsService.GetPaymenttoOnrNeighbors(this.currentIdUser )
// //       .subscribe(neighborPayments => {
// //         this.dataSource = neighborPayments;
// //         console.log(this.dataSource)
// //         this.changeDetector.detectChanges(); // Trigger change detection
// //       });
// //   }
// //   ToPay(){
// //     {
// //       const dialogRef = this.dialog.open(AddPaymentComponent);
  
// //       dialogRef.afterClosed().subscribe(result => {
// //         console.log(`Dialog result: ${result}`);
// //       });
// //     }
// //   }

  

// // }
import { ChangeDetectorRef, Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; // Import MatTableDataSource
import { Payments } from 'src/app/Models/Payments'; // Replace with your actual path
import { PaymentsService } from 'src/app/Services/payments.service'; // Replace with your actual path
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { AddPaymentComponent } from '../add-payment/add-payment.component'; // Replace with actual path
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['Date', 'Cost', 'IsPayment'];
  dataSource: Payments[] = []; // Initialize dataSource as an empty array

  constructor(
    private _paymentsService: PaymentsService,
    private changeDetector: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  currentIdUser: number = 0; // Assuming you have a way to get the user ID


  ngOnInit(): void {
   // ----------------------------------------
    this.currentIdUser = 1; // Assuming you have a way to get the user ID
    this.populateElementData();
  }

  populateElementData() {
    this._paymentsService.GetPaymenttoOnrNeighbors(this.currentIdUser)
      .subscribe(neighborPayments => {
        this.dataSource = neighborPayments;
     console.log(this.dataSource)
     debugger
        this.changeDetector.detectChanges(); // Trigger change detection
      });
  }

  ToPayAll(){
    const dialogRef = this.dialog.open(AddPaymentComponent, { data: {  element:null }});
    dialogRef.afterClosed().subscribe((result: Payments) => { 
      debugger// Specify type of data expected from the dialog
      if (result) {
        console.log(result)
        // this.dataSource = result;
         // Update dataSource based on dialog result
         debugger
      this._paymentsService.IsPaymetnetAll(this.currentIdUser)
      this.populateElementData()
      
      }
    });
  }
  // @Output() dataSourceUpdated = new EventEmitter<Payments[]>(); // New Output property
  ToPay(element:Payments) {
    console.log(element)
    const dialogRef = this.dialog.open(AddPaymentComponent, {
      data: {  element } // Pass a copy of dataSource to prevent mutation
    });


    dialogRef.afterClosed().subscribe((result: Payments) => { // Specify type of data expected from the dialog
    debugger
      
    
        // this.dataSource = result;
         // Update dataSource based on dialog result
         if(element._id!=undefined)
      this._paymentsService.IsPaymetnet(element._id).subscribe(
        (response) => {
          console.log('Payment marked paid successfully!', response);
          // Handle successful response (optional)
        },
        (error) => {
          console.error('Error marking payment paid:', error);
          // Handle error (optional)
        }
      );
      this.populateElementData()
      console.log(this.dataSource)
      debugger
      })
    
  }
}







// import {Component, Inject} from '@angular/core';
// import {
//   MatDialog,
//   MAT_DIALOG_DATA,
//   MatDialogRef,
//   MatDialogTitle,
//   MatDialogContent,
//   MatDialogActions,
//   MatDialogClose,
// } from '@angular/material/dialog';
// import {MatButtonModule} from '@angular/material/button';
// import {FormsModule} from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

// /**
//  * @title Dialog Overview
//  */
// @Component({
//   selector: 'dialog-overview-example',
//   templateUrl: 'dialog-overview-example.html',
//   standalone: true,
//   imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
// })
// export class DialogOverviewExample {
//   animal: string;
//   name: string;

//   constructor(public dialog: MatDialog) {}

//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       data: {name: this.name, animal: this.animal},
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }
// }

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
//   standalone: true,
//   imports: [
//     MatFormFieldModule,
//     MatInputModule,
//     FormsModule,
//     MatButtonModule,
//     MatDialogTitle,
//     MatDialogContent,
//     MatDialogActions,
//     MatDialogClose,
//   ],
// })
// export class DialogOverviewExampleDialog {
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
