import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LycanComponent } from './lycan.component';

describe('LycanComponent', () => {
  let component: LycanComponent;
  let fixture: ComponentFixture<LycanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LycanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LycanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
