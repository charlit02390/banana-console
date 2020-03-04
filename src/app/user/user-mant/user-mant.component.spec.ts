import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMantComponent } from './user-mant.component';

describe('UserMantComponent', () => {
  let component: UserMantComponent;
  let fixture: ComponentFixture<UserMantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
