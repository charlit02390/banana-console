import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CableMantComponent } from './cable-mant.component';

describe('CableMantComponent', () => {
  let component: CableMantComponent;
  let fixture: ComponentFixture<CableMantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableMantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CableMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
