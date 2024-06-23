import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payments } from '../Models/Payments';
import {  tap } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

const API_BASE_URL = 'http://your-api-url.com/api/';
@Injectable({
  providedIn: 'root'
})


export class PaymentsService {
  ngOnInit() {
    throw new Error('Method not implemented.');
  }
  
  url="https://localhost:7061/api/Payment"
  totalAmount=0
  
  // private paymentsSubject = new BehaviorSubject<Payments[]>([]);

  
  constructor(private http: HttpClient) { }

  
  
 
  GetPaymenttoOnrNeighbors(id: number): Observable<Payments[]> {
    let url= 'https://localhost:7061/api/Payment/neighbor/'+id
    console.log(this.url)
    return this.http.get<Payments[]>(url)
    .pipe(
      map((payments: Payments[]) => {
        this.totalAmount = payments.reduce((acc, payment) => {
          // Consider null or undefined handling for payment.cost
          if (!payment.isPaymetnet  ) { // Check for existence
            return acc + (payment.cost ); // Use default value for missing cost
          } else {
            return acc; // No change if payment.isPayment is undefined
          }
        }, 0);

       console.log(this.totalAmount) 
        return payments; // Return object with payments and total amount
      })
    );
      
  }


// Function to mark a single payment as paid
IsPaymetnet(paymentId: number): Observable<any> {
  debugger
 let t ="https://localhost:7061/api/Payment/"+paymentId
 console.log(t)
  // Update URL with base path
  return this.http.put(t, true);
   // Set IsPaymetnet to true in the request body
}

// Function to mark all payments for a neighbor as paid
IsPaymetnetAll(neighborId: number): Observable<any> {
  const url = "https://localhost:7061/api/Payment/"+neighborId+"/payall";
  console.log(url
    )
  return this.http.put(url, true); // Set IsPaymetnet to true in the request body
}
 
  getAllPayments(): Observable< Payments[] > {
    console.log(this.url)
    debugger
 

    return this.http.get<Payments[]>(this.url)
 
  }
  Post(payment:Payments):Observable<Payments>{
    
    return this.http.post<Payments>(this.url,payment)
  }

  // GetPaymenttoOnrNeighbors(id:number):Observable<Payments[]>{
  //   return this.http.get<Payments[]>(this.url+'/get'+id)
  // }
  // GetAllPayments():Observable<Payments[]>{
  //   return this.http.get<Payments[]>(this.url+'/get')
  // }
  
  
  // DeleteNeighbor(id:number):Observable<Payments>{
  //   return this.http.delete<Payments>(this.url+'/Delete'+id)
  // }


  

  
  

  

  
}