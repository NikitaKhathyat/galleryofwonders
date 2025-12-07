import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderCard } from './wonder-card';

describe('WonderCard', () => {
  let component: WonderCard;
  let fixture: ComponentFixture<WonderCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WonderCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WonderCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
