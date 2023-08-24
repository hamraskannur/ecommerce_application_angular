import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('f') messageForm!: NgForm;

  onSubmit(){
    if(this.messageForm.valid){

      console.log(this.messageForm.value);
    }
  }
}
