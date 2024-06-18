import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinngComponent } from './bookinng.component';

describe('BookinngComponent', () => {
  let component: BookinngComponent;
  let fixture: ComponentFixture<BookinngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookinngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookinngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
