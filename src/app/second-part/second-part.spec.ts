import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPart } from './second-part';

describe('SecondPart', () => {
  let component: SecondPart;
  let fixture: ComponentFixture<SecondPart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondPart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
