import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AllOrgadminComponent } from "./all-orgadmin.component";

describe("AllOrgadminComponent", () => {
  let component: AllOrgadminComponent;
  let fixture: ComponentFixture<AllOrgadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllOrgadminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrgadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
