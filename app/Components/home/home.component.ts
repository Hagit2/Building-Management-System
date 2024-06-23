import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/Models/Message';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router:Router ,private _messageservice :MessageService){}
  public messages: Array<Message> | undefined;
neighbor=false
  ngOnInit() :void{ 
   this.getPublicMessages()
      // (mes: Message[]) => {

   
      //  this.messages = mes; }
 
     
  }
  getPublicMessages():void {
    console.log("componnent")

  this._messageservice.GetPublicMessages().subscribe( data=>{
    this.messages=data
    
  }  
    // next: data => this.messages = data,
   
    // error: error => console.log(error),
    // complete: () => this.isLoading = false
  )

  }
enter(){
   this.router.navigateByUrl('/login')

 }
 shwo(){
this.neighbor=true;
 }
}
