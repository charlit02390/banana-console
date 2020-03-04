import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDisplayComponent } from './block-display.component';

describe('BlocksDisplayComponent', () => {
  let component: BlockDisplayComponent;
  let fixture: ComponentFixture<BlockDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
