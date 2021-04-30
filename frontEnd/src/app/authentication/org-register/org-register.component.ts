import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-org-register",
  templateUrl: "./org-register.component.html",
  styleUrls: ["./org-register.component.sass"],
})
export class OrgRegisterComponent implements OnInit {
  orgRegisterForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.orgRegisterForm = this.formBuilder.group({
      orgName: ["", Validators.required],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      phone: ["", Validators.required],
      address: ["", Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  get f() {
    return this.orgRegisterForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.orgRegisterForm.invalid) {
      return;
    } else {
      this.router.navigate(["/admin/dashboard/main"]);
    }
  }
}
