import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Role } from "src/app/core/models/role";
@Component({
  selector: "app-locked",
  templateUrl: "./locked.component.html",
  styleUrls: ["./locked.component.scss"],
})
export class LockedComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  userImg: string;
  userFullName: string;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      password: ["", Validators.required],
    });
    this.userImg = this.authService.currentUserValue.img;
    this.userFullName = this.authService.currentUserValue.name;
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {
      const role = this.authService.currentUserValue.role;
      if (role === Role.All || role === Role.SuperAdmin) {
        this.router.navigate(["/admin/dashboard/main"]);
      } else if (role === Role.OrgAdmin) {
        this.router.navigate(["/orgAdmin/dashboard"]);
      } else {
        this.router.navigate(["/authentication/signin"]);
      }
    }
  }
}
