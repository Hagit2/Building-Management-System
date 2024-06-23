import { Component } from '@angular/core';
import { Message } from '../../Models/Message';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MessageService } from 'src/app/Services/message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  

  constructor(private _snackBar: MatSnackBar,private _messageService:MessageService,private router:Router) {}

 
  openSnackBar(id: string, dateStart: string,dateEnd: string, txt:string) {
    const IdAdd = parseInt(id); // ממיר מחרוזת למספר
    const dateStartAdd = new Date(dateStart); // ממיר מחרוזת לתאריך
    const dateEndAdd = new Date(dateEnd); // ממיר מחרוזת לתאריך
    const txtAdd=txt;
    console.log("hiii")
    const message: Message={
      text: txtAdd,
      start: dateStartAdd,
      end: dateEndAdd,
      to: 0
    }
    this._messageService.Post(message).subscribe(response => {
     console.log(response)
    });
    
    this._snackBar.open("The message was sent successfully 😉");
    this.router.navigate(['neighbor']);

  }
}
