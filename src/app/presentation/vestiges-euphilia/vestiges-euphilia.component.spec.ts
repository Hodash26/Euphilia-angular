import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestigesEuphiliaComponent } from './vestiges-euphilia.component';

describe('VestigesEuphiliaComponent', () => {
  let component: VestigesEuphiliaComponent;
  let fixture: ComponentFixture<VestigesEuphiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestigesEuphiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestigesEuphiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
