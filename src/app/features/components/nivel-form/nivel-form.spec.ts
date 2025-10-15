import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelForm } from './nivel-form';

describe('NivelForm', () => {
  let component: NivelForm;
  let fixture: ComponentFixture<NivelForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
