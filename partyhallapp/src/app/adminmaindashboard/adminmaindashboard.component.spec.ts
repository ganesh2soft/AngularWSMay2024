import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmaindashboardComponent } from './adminmaindashboard.component';

describe('AdminmaindashboardComponent', () => {
  let component: AdminmaindashboardComponent;
  let fixture: ComponentFixture<AdminmaindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminmaindashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminmaindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
