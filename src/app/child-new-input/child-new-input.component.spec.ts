import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNewInputComponent } from './child-new-input.component';

describe('ChildNewInputComponent', () => {
  let component: ChildNewInputComponent;
  let fixture: ComponentFixture<ChildNewInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildNewInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildNewInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
