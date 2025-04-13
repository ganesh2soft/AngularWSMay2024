import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwithcustomerComponent } from './adminwithcustomer.component';

describe('AdminwithcustomerComponent', () => {
  let component: AdminwithcustomerComponent;
  let fixture: ComponentFixture<AdminwithcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminwithcustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminwithcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
