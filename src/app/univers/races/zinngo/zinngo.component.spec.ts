import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinngoComponent } from './zinngo.component';

describe('ZinngoComponent', () => {
  let component: ZinngoComponent;
  let fixture: ComponentFixture<ZinngoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZinngoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
