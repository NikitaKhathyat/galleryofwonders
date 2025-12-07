import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderList } from './wonder-list';

describe('WonderList', () => {
  let component: WonderList;
  let fixture: ComponentFixture<WonderList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WonderList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WonderList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
