import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendImageComponent } from './send-image.component';

describe('SendImageComponent', () => {
  let component: SendImageComponent;
  let fixture: ComponentFixture<SendImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
