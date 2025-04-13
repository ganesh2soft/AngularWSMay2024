import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisithallsComponent } from './visithalls.component';

describe('VisithallsComponent', () => {
  let component: VisithallsComponent;
  let fixture: ComponentFixture<VisithallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisithallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisithallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
