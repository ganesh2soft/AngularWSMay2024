import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoComponent } from './po.component';

describe('PoComponent', () => {
  let component: PoComponent;
  let fixture: ComponentFixture<PoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
