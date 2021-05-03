import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveServeysComponent } from './active-serveys.component';

describe('ActiveServeysComponent', () => {
  let component: ActiveServeysComponent;
  let fixture: ComponentFixture<ActiveServeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveServeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveServeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
