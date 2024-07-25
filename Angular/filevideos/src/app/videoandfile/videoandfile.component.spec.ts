import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoandfileComponent } from './videoandfile.component';

describe('VideoandfileComponent', () => {
  let component: VideoandfileComponent;
  let fixture: ComponentFixture<VideoandfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoandfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoandfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
