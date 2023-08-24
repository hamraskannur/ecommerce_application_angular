import { TestBed } from '@angular/core/testing';
import { ToastrServices } from './toastr.service';
import { TOAST_CONFIG, ToastrModule } from 'ngx-toastr';

describe('ToastrService', () => {
  let service: ToastrServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()], 
      providers: [
        ToastrServices,
        // { provide: TOAST_CONFIG, useValue: { IconClasses: {success: 'icon-success', error: 'icon-error'} } }
      ],
    });
    service = TestBed.inject(ToastrServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
