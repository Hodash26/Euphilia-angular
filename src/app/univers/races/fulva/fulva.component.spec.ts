import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulvaComponent } from './fulva.component';

describe('FulvaComponent', () => {
  let component: FulvaComponent;
  let fixture: ComponentFixture<FulvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
