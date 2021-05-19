import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/core/admin/admin.service";
import { Admin } from "src/app/core/models/admin";
import { BehaviorSubject, Observable } from "rxjs";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "src/app/core/service/auth.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.sass"],
})
export class SettingsComponent implements OnInit {
  public form: FormGroup;
  public submit: false;
  name: string;
  img: string;
  role: string;
  phone: string;

  admin$: Observable<Admin>;
  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.form = new FormGroup({
      name: new FormControl(""),
    });
    (this.name = authService.currentUserValue.name),
      (this.role = authService.currentUserValue.Role.name),
      (this.img = authService.currentUserValue.img);
    this.phone = authService.currentUserValue.phone;
  }

  ngOnInit(): void {
    this.form.patchValue({
      name: this.authService.currentUserValue.name,
    });

    this.form = this.formBuilder.group({
      name: [this.authService.currentUserValue.name],
      oldPassword: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  seeFormValue() {
    console.log(this.form.value);
  }
  onSubmit() {
    this.adminService
      .changePassword(
        this.authService.currentUserValue.id,
        this.f.oldPassword.value,
        this.f.password.value
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.showNotification(
            "Green",
            "Change Password Successfully...!!!",
            "bottom",
            "center"
          );
        },
        (error) => console.log(error)
      );
  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, "", {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
}
