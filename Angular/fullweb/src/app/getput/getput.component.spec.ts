import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetputComponent } from './getput.component';

describe('GetputComponent', () => {
  let component: GetputComponent;
  let fixture: ComponentFixture<GetputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
