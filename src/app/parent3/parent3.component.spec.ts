import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent3Component } from './parent3.component';

describe('Parent3Component', () => {
  let component: Parent3Component;
  let fixture: ComponentFixture<Parent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
