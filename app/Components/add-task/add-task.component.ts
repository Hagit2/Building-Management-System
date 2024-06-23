import { Component } from '@angular/core';
import { Tasks } from '../../Models/Tasks';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TasksService } from 'src/app/Services/tasks.service';
import { RevenuesService } from 'src/app/Services/revenues.service';
import { Revenues } from 'src/app/Models/Revenues';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private _snackBar: MatSnackBar,
    private _tasksService:TasksService,
    private _revenuesService:RevenuesService,
    private router:Router) {}

 
  openSnackBar(amount: string, description: string) {
    const descriptionAdd = description;
    const amountAdd = parseInt(amount);  // ממיר מחרוזת למספר
    console.log("hiii")
    const task: Tasks={
      description :descriptionAdd,
      cost  : amountAdd,
      isCompleted:true
    }
    const revenue: Revenues={
      cashbox: 0,
      tasksId: 0,
      paymentId: 0
    }
    this._revenuesService.GetAmountRevenue().subscribe(response=>{
      console.log(response+"קופה נוכחית סכום")
    if(response-amountAdd>=0){
      this._tasksService.Post(task).subscribe(response => {
        console.log(response+"משימה שנוספה")
        //revenue.tasksId=response.
       });
      revenue.cashbox=response-amountAdd
      this._revenuesService.Post(revenue).subscribe(data=>{
      console.log(data+"עדכון קופה")
      })
      this._snackBar.open("The task has been successfully added 😉");
      this.router.navigate(['admin']);

    }
    else{
      this._snackBar.open("There is no budget for this task 😔");
    }
    
    })
    
    
    
  }
}
