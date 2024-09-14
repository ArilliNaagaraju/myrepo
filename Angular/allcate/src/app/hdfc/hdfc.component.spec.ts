import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDFCComponent } from './hdfc.component';

describe('HDFCComponent', () => {
  let component: HDFCComponent;
  let fixture: ComponentFixture<HDFCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HDFCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HDFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
