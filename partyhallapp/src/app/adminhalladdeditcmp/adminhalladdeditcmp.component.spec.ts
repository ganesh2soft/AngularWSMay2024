import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhalladdeditcmpComponent } from './adminhalladdeditcmp.component';

describe('AdminhalladdeditcmpComponent', () => {
  let component: AdminhalladdeditcmpComponent;
  let fixture: ComponentFixture<AdminhalladdeditcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminhalladdeditcmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminhalladdeditcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
