import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwithbookingComponent } from './adminwithbooking.component';

describe('AdminwithbookingComponent', () => {
  let component: AdminwithbookingComponent;
  let fixture: ComponentFixture<AdminwithbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminwithbookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminwithbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
