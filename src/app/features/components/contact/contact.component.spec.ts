import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ToastrServices } from '../../services/toastr.service';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ToastrModule.forRoot()],
      declarations: [ContactComponent, HeaderComponent, FooterComponent],
      providers:[provideMockStore({})]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
