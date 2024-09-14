import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginSigUpComponent } from './sigin-sig-up.component';

describe('SiginSigUpComponent', () => {
  let component: SiginSigUpComponent;
  let fixture: ComponentFixture<SiginSigUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiginSigUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiginSigUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
