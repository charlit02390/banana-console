import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockMantComponent } from './block-mant.component';

describe('BlocksMantComponent', () => {
  let component: BlockMantComponent;
  let fixture: ComponentFixture<BlockMantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockMantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
