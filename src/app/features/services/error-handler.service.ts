import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private router: Router) {}

  handleError(error: any): void {
    if (error.status === 401) {
      localStorage.clear();
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/404']);
    }
  }
}
