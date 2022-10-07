import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedSessionComponent } from './started-session.component';

describe('StartedSessionComponent', () => {
  let component: StartedSessionComponent;
  let fixture: ComponentFixture<StartedSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartedSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartedSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
