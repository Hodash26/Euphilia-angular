import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaidoComponent } from './taido.component';

describe('TaidoComponent', () => {
  let component: TaidoComponent;
  let fixture: ComponentFixture<TaidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
