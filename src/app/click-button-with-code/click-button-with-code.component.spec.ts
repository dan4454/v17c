import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickButtonWithCodeComponent } from './click-button-with-code.component';

describe('ClickButtonWithCodeComponent', () => {
  let component: ClickButtonWithCodeComponent;
  let fixture: ComponentFixture<ClickButtonWithCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickButtonWithCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickButtonWithCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
