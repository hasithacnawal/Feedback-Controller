import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Role } from "src/app/core/models/role";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  error = "";
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ["chana@gmail.com", Validators.required],
      password: ["1234", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  superAdminSet() {
    this.authForm.get("email").setValue("chana@gmail.com");
    this.authForm.get("password").setValue("1234");
  }
  orgAdminSet() {
    this.authForm.get("email").setValue("damith@gmail.com");
    this.authForm.get("password").setValue("1234");
  }
  patientSet() {
    this.authForm.get("email").setValue("patient@hospital.org");
    this.authForm.get("password").setValue("patient@123");
  }
  onSubmit() {
    this.submitted = true;
    this.error = "";
    if (this.authForm.invalid) {
      this.error = "email or Password not valid !";
      return;
    } else {
      this.authService
        .login(this.f.email.value, this.f.password.value)
        .subscribe(
          (res) => {
            if (res) {
              const role = this.authService.currentUserValue.Role.name;
              if (role === "SuperAdmin") {
                this.router.navigate(["/admin/dashboard/main"]);
              } else if (role === "OrgAdmin") {
                this.router.navigate(["/orgAdmin/dashboard"]);
              } else {
                this.router.navigate(["/authentication/signin"]);
              }
            } else {
              this.error = "Invalid Login";
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
          }
        );
    }
  }
}
