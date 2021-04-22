import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrganizationsComponent } from './all-organizations.component';

describe('AllOrganizationsComponent', () => {
  let component: AllOrganizationsComponent;
  let fixture: ComponentFixture<AllOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOrganizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
