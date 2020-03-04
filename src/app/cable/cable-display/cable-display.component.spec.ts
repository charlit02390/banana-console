import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CableDisplayComponent } from './cable-display.component';

describe('CableDisplayComponent', () => {
  let component: CableDisplayComponent;
  let fixture: ComponentFixture<CableDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CableDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
