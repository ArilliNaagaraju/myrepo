import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResePasswordComponent } from './rese-password.component';

describe('ResePasswordComponent', () => {
  let component: ResePasswordComponent;
  let fixture: ComponentFixture<ResePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
