import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICICComponent } from './icic.component';

describe('ICICComponent', () => {
  let component: ICICComponent;
  let fixture: ComponentFixture<ICICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ICICComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ICICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
