import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwithhallComponent } from './adminwithhall.component';

describe('AdminwithhallComponent', () => {
  let component: AdminwithhallComponent;
  let fixture: ComponentFixture<AdminwithhallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminwithhallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminwithhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
