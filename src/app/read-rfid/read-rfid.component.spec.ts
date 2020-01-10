import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRfidComponent } from './read-rfid.component';

describe('ReadRfidComponent', () => {
  let component: ReadRfidComponent;
  let fixture: ComponentFixture<ReadRfidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadRfidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRfidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
