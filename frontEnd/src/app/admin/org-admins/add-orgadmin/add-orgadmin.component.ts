import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-orgadmin",
  templateUrl: "./add-orgadmin.component.html",
  styleUrls: ["./add-orgadmin.component.sass"],
})
export class AddOrgadminComponent {
  orgAdminForm: FormGroup;
  hide3 = true;
  agree3 = false;

  constructor(private fb: FormBuilder) {
    this.orgAdminForm = this.fb.group({
      name: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      organization: [[], [Validators.required]],
      roleId: ["", [Validators.required]],
    });
  }

  onSubmit() {
    console.log("Form Value", this.orgAdminForm.value);
  }
}
