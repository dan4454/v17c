import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNewInputComponent } from './parent-new-input.component';

describe('ParentNewInputComponent', () => {
  let component: ParentNewInputComponent;
  let fixture: ComponentFixture<ParentNewInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentNewInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentNewInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
