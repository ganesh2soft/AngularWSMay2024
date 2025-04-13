import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiftyhighlowComponent } from './niftyhighlow.component';

describe('NiftyhighlowComponent', () => {
  let component: NiftyhighlowComponent;
  let fixture: ComponentFixture<NiftyhighlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NiftyhighlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiftyhighlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
