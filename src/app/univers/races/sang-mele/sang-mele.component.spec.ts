import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SangMeleComponent } from './sang-mele.component';

describe('SangMeleComponent', () => {
  let component: SangMeleComponent;
  let fixture: ComponentFixture<SangMeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SangMeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SangMeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
