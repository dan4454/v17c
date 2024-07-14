import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferAndIfChildComponent } from './defer-and-if-child.component';

describe('DeferAndIfChildComponent', () => {
  let component: DeferAndIfChildComponent;
  let fixture: ComponentFixture<DeferAndIfChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferAndIfChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferAndIfChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
