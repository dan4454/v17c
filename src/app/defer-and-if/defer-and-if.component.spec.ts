import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferAndIfComponent } from './defer-and-if.component';

describe('DeferAndIfComponent', () => {
  let component: DeferAndIfComponent;
  let fixture: ComponentFixture<DeferAndIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferAndIfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferAndIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
