import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from 'src/app/core/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  searchData = '';
  searchDataFromChild(search: string) {
    this.searchData = search;
  }
}
