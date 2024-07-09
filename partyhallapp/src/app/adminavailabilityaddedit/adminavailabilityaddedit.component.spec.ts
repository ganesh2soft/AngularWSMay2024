import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminavailabilityaddeditComponent } from './adminavailabilityaddedit.component';

describe('AdminavailabilityaddeditComponent', () => {
  let component: AdminavailabilityaddeditComponent;
  let fixture: ComponentFixture<AdminavailabilityaddeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminavailabilityaddeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminavailabilityaddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
