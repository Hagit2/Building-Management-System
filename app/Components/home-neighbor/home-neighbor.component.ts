import { Component, ComponentRef, ContentChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payments } from '../../Models/Payments';
import { MessageService } from '../../Services/message.service';
import { NeighborsService } from '../../Services/neighbors.service';
import { PaymentsService } from '../../Services/payments.service';

@Component({
  selector: 'app-home-neighbor',
  templateUrl: './home-neighbor.component.html',
  styleUrls: ['./home-neighbor.component.css']
})
export class HomeNeighborComponent implements OnInit {


  constructor(private router: Router,
              private _messageservice: MessageService,
              private _neighborservice: NeighborsService) { }

  session: any;
  payments: Payments[] = [];

  ngOnInit(): void {
    this.session = this._neighborservice.session;
    console.log(this.session);
  }

  currentComponent = "Message";

  loadComponent(componentName: string) {
    this.currentComponent = componentName;
  }
  // addPayment(paymentDetails: any) {  // Pass the payment details argument
  //   if (this.paymentComponentRef) {
  //     this.paymentComponentRef.instance.data = paymentDetails; // Assuming 'data' exists in PaymentComponent
  //   } else {
  //     console.error('קומפוננטת payment לא נמצאה');
  //   }
  // }
}
