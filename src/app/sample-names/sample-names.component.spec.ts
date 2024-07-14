import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNamesComponent } from './sample-names.component';

describe('SampleNamesComponent', () => {
  let component: SampleNamesComponent;
  let fixture: ComponentFixture<SampleNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleNamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
