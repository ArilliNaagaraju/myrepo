import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughtComponent } from './rought.component';

describe('RoughtComponent', () => {
  let component: RoughtComponent;
  let fixture: ComponentFixture<RoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoughtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
