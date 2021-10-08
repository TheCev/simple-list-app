import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfullySnackbarComponent } from './succesfully-snackbar.component';

describe('SuccesfullySnackbarComponent', () => {
  let component: SuccesfullySnackbarComponent;
  let fixture: ComponentFixture<SuccesfullySnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesfullySnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfullySnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
