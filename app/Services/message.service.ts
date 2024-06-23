import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../Models/Message';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
url="https://localhost:7061/api/Message"

constructor(private http: HttpClient) { }
  Post(message:Message):Observable<Message>{
    return this.http.post<Message>(this.url+'/',message)
  }
  GetMessagesToneighbor(id:number):Observable<Message[]>{
    return this.http.get<Message[]>(this.url+"/byNeighborId/"+id)
  }
  GetMessageById(id:number):Observable<Message>{
    return this.http.get<Message>(this.url+"/"+id)
  }


  GetPublicMessages():Observable< Message[]>{
    return this.http.get<Message[]>(this.url);
  }
  

}
