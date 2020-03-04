import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmMantComponent } from './farm-mant.component';

describe('FarmMantComponent', () => {
  let component: FarmMantComponent;
  let fixture: ComponentFixture<FarmMantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmMantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
