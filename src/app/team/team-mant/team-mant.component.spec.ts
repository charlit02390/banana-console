import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMantComponent } from './team-mant.component';

describe('TeamMantComponent', () => {
  let component: TeamMantComponent;
  let fixture: ComponentFixture<TeamMantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
