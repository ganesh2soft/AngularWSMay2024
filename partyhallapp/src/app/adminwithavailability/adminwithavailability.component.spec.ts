import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwithavailabilityComponent } from './adminwithavailability.component';

describe('AdminwithavailabilityComponent', () => {
  let component: AdminwithavailabilityComponent;
  let fixture: ComponentFixture<AdminwithavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminwithavailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminwithavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
