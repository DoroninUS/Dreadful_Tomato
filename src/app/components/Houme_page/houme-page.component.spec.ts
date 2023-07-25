import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoumePageComponent } from './houme-page.component';

describe('HoumePageComponent', () => {
  let component: HoumePageComponent;
  let fixture: ComponentFixture<HoumePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoumePageComponent]
    });
    fixture = TestBed.createComponent(HoumePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
