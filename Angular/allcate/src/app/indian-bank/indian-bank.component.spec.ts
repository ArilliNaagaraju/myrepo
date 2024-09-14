import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianBankComponent } from './indian-bank.component';

describe('IndianBankComponent', () => {
  let component: IndianBankComponent;
  let fixture: ComponentFixture<IndianBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndianBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
