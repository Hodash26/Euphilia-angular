import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SogornComponent } from './sogorn.component';

describe('SogornComponent', () => {
  let component: SogornComponent;
  let fixture: ComponentFixture<SogornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SogornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SogornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
