import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedSurveysComponent } from './deleted-surveys.component';

describe('DeletedSurveysComponent', () => {
  let component: DeletedSurveysComponent;
  let fixture: ComponentFixture<DeletedSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
