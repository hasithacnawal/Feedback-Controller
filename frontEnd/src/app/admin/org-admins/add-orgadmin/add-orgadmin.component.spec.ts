import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrgadminComponent } from './add-orgadmin.component';

describe('AddOrgadminComponent', () => {
  let component: AddOrgadminComponent;
  let fixture: ComponentFixture<AddOrgadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrgadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrgadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
