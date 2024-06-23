import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TasksService } from 'src/app/Services/tasks.service';
import { Tasks } from 'src/app/Models/Tasks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  constructor(private _tasksService: TasksService,private router: Router) {}

  displayedColumns: string[] = ['description', 'isCompleted','cost'];
  tasks: Tasks[] = [];

  ngOnInit(): void {
    this.getAllPayments();
  }

  getAllPayments(): void {
    this._tasksService.GetAllTasks().subscribe(data => {
      console.log(data)
      this.tasks = data;
      console.log(this.tasks)
      console.log(data);    }); 
  }
  
  addTask():void{
    this.router.navigate(['admin/task/new']);
  }

  updateTask():void{
    
  }
}
