import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private router: Router,private ApiService:ApiService) {}

  handleError(error: any): void {
    this.ApiService.logErr({message:error.message}).subscribe()
    if (error.status === 401) {
      localStorage.clear();
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/404']);
    }
  }
}
