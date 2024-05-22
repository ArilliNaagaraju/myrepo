import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeluguComponent } from './telugu.component';

describe('TeluguComponent', () => {
  let component: TeluguComponent;
  let fixture: ComponentFixture<TeluguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeluguComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeluguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
