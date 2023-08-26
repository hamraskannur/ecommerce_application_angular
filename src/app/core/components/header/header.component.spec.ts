import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';
import { ToastrServices } from 'src/app/features/services/toastr.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let toastrServiceMock: Partial<ToastrServices>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [FormsModule], 
      providers: [
        provideMockStore({}),
        { provide: ToastrServices, useValue: toastrServiceMock },
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search term on searchTerm()', () => {
    const searchTermWord = 'test search term';
    spyOn(component.searchData, 'emit');
    component.searchTermWord = searchTermWord;
    component.searchTerm();
    expect(component.searchData.emit).toHaveBeenCalledWith(searchTermWord);
  });

  it('should toggle searchActive on showSearch()', () => {
    component.searchActive = false;
    component.showSearch();
    expect(component.searchActive).toBe(true);

    component.showSearch();
    expect(component.searchActive).toBe(false);
  });

});
