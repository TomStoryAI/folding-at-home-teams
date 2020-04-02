import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostActivityComponent } from './most-activity.component';

describe('MostActivityComponent', () => {
  let component: MostActivityComponent;
  let fixture: ComponentFixture<MostActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
