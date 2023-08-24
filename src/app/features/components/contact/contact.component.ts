import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrServices } from '../../services/toastr.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('f') messageForm!: NgForm;
  constructor(private toastrServices:ToastrServices){}
  onSubmit(){
    if(this.messageForm.valid){
       this.toastrServices.showSuccess("Successfully submitted")
      console.log(this.messageForm.value);
      this.messageForm.reset()
    }
  }
}
