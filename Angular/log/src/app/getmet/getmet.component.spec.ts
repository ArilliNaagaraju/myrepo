import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmetComponent } from './getmet.component';

describe('GetmetComponent', () => {
  let component: GetmetComponent;
  let fixture: ComponentFixture<GetmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetmetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
