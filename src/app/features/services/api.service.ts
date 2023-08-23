import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User, Product } from 'src/app/core/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public Api = "https://fakestoreapi.com/products"
  public serverApi="http://localhost:4000/user/"

  constructor(private http:HttpClient) { }
  getProducts=(): Observable<Product[]> =>{
    return this.http.get<Product[]>(`${this.Api}`)
  }

  userRegistration=(userData:object): Observable<{token:string,user:User,status:boolean,msg:string}> =>{
    return this.http.post<{token:string,user:User,status:boolean,msg:string}>(`${this.serverApi}signup`,userData)
  }
  userLogin=(userData:object): Observable<{token:string,user:User,status:boolean,message:string}> =>{
    return this.http.post<{token:string,user:User,status:boolean,message:string}>(`${this.serverApi}login`,userData)
  }

  getUser=(): Observable<User> =>{
    return this.http.get<User>(`${this.serverApi}me`)
  }
}
