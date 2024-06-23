import { Component, Input} from '@angular/core';
import {MessageService} from 'src/app/Services/message.service';
import { Message} from 'src/app/Models/Message';

import { Router } from '@angular/router';
const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers:[MessageService]
})

export class NotesComponent {
  constructor(public mes:MessageService,private _messageservice :MessageService){}

  public messages: Array<Message> | undefined ;
  ngOnInit() :void
  { 
   this.getPublicMessages()
  }
  getPublicMessages():void {
    console.log("componnent")

  this._messageservice.GetPublicMessages().subscribe( data=>{
    this.messages=data
    
  }) 
   }  
  
 
   longText = " "
   writerMessege= " "
   idWriterMessege=0
    message: Message | undefined;
  isRead: boolean = false;

  toggleReadStatus() {
    this.isRead = !this.isRead;
  }
   


}
