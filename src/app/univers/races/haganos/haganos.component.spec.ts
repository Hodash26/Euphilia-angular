import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaganosComponent } from './haganos.component';

describe('HaganosComponent', () => {
  let component: HaganosComponent;
  let fixture: ComponentFixture<HaganosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaganosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaganosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
