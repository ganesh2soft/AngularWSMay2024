import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmgmtComponent } from './bookmgmt.component';

describe('BookmgmtComponent', () => {
  let component: BookmgmtComponent;
  let fixture: ComponentFixture<BookmgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookmgmtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
