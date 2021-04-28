import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OrganizationService } from "src/app/core/organization/organization.service";

@Component({
  selector: "app-add-organization",
  templateUrl: "./add-organization.component.html",
  styleUrls: ["./add-organization.component.sass"],
})
export class AddOrganizationComponent implements OnInit {
  addOrganizationForm: FormGroup;
  hide3 = true;
  agree3 = false;
  constructor(
    private fb: FormBuilder,
    private orgService: OrganizationService
  ) {
    this.addOrganizationForm = this.fb.group({
      name: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      address: [""],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
    });
  }

  ngOnInit(): void {}

  saveOrganization() {
    this.orgService
      .createOrganization(this.addOrganizationForm.value)
      .subscribe(
        (data) => {
          console.info("Success");
        },
        (error) => console.info(error)
      );
  }

  onSubmit() {
    console.log("Form Value", this.addOrganizationForm.value);

    // this.orgService.createOrganization(this.docForm.value);

    this.saveOrganization();
  }
}
