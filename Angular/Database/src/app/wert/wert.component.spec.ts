import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WertComponent } from './wert.component';

describe('WertComponent', () => {
  let component: WertComponent;
  let fixture: ComponentFixture<WertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
