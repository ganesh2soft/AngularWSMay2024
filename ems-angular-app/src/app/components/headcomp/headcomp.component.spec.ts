import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadcompComponent } from './headcomp.component';

describe('HeadcompComponent', () => {
  let component: HeadcompComponent;
  let fixture: ComponentFixture<HeadcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
