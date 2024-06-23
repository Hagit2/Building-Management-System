import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Revenues } from '../Models/Revenues';

@Injectable({
  providedIn: 'root'
})
export class RevenuesService {
  url="https://localhost:7061/api/Revenue"
  constructor(private http: HttpClient) { }
  Post(revenue:Revenues):Observable<Revenues>{
    return this.http.post<Revenues>(this.url,revenue)
  }

  GetAmountRevenue():Observable<number>{
    return this.http.get<number>(this.url+"/Amount")
  }
}
