import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User, product } from 'src/app/core/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Api = "https://fakestoreapi.com/products"
  private serverApi="http://localhost:4000/user/"

  constructor(private http:HttpClient) { }
  getProdects=(): Observable<product[]> =>{
    return this.http.get<product[]>(`${this.Api}`)
  }

  userRegistration=(userData:object): Observable<{token:string,user:User,status:boolean,msg:string}> =>{
    return this.http.post<{token:string,user:User,status:boolean,msg:string}>(`${this.serverApi}signup`,userData)
  }

  getUser=(): Observable<User> =>{
    return this.http.get<User>(`${this.serverApi}me`)
  }
}
