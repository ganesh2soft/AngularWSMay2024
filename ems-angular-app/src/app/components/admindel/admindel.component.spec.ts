import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindelComponent } from './admindel.component';

describe('AdmindelComponent', () => {
  let component: AdmindelComponent;
  let fixture: ComponentFixture<AdmindelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
