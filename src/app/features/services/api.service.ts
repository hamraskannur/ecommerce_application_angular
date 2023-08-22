import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { product } from 'src/app/core/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Api = "https://fakestoreapi.com/products"

  constructor(private http:HttpClient) { }
  getProdects=(): Observable<product[]> =>{
    return this.http.get<product[]>(`${this.Api}`)
  }
}
