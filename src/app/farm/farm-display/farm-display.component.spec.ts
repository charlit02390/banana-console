import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmDisplayComponent } from './farm-display.component';

describe('FarmDisplayComponent', () => {
  let component: FarmDisplayComponent;
  let fixture: ComponentFixture<FarmDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
