import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmassageComponent } from './getmassage.component';

describe('GetmassageComponent', () => {
  let component: GetmassageComponent;
  let fixture: ComponentFixture<GetmassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetmassageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetmassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
