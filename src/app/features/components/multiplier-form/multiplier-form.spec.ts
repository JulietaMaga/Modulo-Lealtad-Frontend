import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplierForm } from './multiplier-form';

describe('MultiplierForm', () => {
  let component: MultiplierForm;
  let fixture: ComponentFixture<MultiplierForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplierForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplierForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
