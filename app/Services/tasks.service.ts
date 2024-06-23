import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../Models/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url="https://localhost:7061/api/Tasks"
 
  constructor(private http: HttpClient) { }
  Post(task:Tasks):Observable<Tasks>{
    return this.http.post<Tasks>(this.url,task)
  }
  GetOnTask(id:number):Observable<Tasks>{
    return this.http.get<Tasks>(this.url+'/get'+id)
  }
  GetAllTasks():Observable<Tasks[]>{
    return this.http.get<Tasks[]>(this.url)
  }
  UpdateTask(id:number,task:Tasks):Observable<Tasks>{
    return this.http.put<Tasks>(this.url+'/Put'+id , task)
  }
 //אין delete
}