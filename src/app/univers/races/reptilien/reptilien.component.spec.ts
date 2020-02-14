import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReptilienComponent } from './reptilien.component';

describe('ReptilienComponent', () => {
  let component: ReptilienComponent;
  let fixture: ComponentFixture<ReptilienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReptilienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReptilienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
