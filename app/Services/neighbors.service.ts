import { Injectable } from '@angular/core';
import { Neighbors } from '../Models/Neighbors';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NeighborsService {
  // users:any[]=[{//לכאן צריך למלאות את שמות השכנים והסיסמאות
  //   username:'eti',
  //   password:'11'
  // }];
  // neighor:Neighbors[]=[{
  //   // Id: 1,
  //   // LastName:'avni',
  //   // ApartmentNum :1,
  //   // NumPersons: 12,
  //   // Profil:true
  // }]
  session:Neighbors | undefined;
isManagger=false;

  url="https://localhost:7061/api/Neighbor"

  constructor(private http: HttpClient) { }
  Post(neighbor:Neighbors):Observable<Neighbors>{
    console.log(this.url)
    
    return this.http.post<Neighbors>(this.url,neighbor)
  }
  // PostLogin(UserName:string,password:number):Observable<Neighbors>{
  //   return this.http.post<Neighbors>(this.url+'/login',UserName,password)
  // }
  GetOnNeighbor(id:number):Observable<Neighbors>{
    // this.url=`${this.url}/get/${id}`;
    console.log(this.url)
    return this.http.get<Neighbors>(this.url+'/'+id)
    
  }
  GetAllNeighbors():Observable<Neighbors[]>{
    return this.http.get<Neighbors[]>(this.url)
  }
  UpdateNeighbor(id:number,neighbor:Neighbors):Observable<Neighbors>{
    return this.http.put<Neighbors>(this.url+'/'+id , neighbor)
  }
  DeleteNeighbor(id:number):Observable<Neighbors>{
    return this.http.delete<Neighbors>(this.url+'/Delete'+id)
  }

  
  
}










  



