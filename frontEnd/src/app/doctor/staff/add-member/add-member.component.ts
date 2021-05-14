import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Organization } from "src/app/core/models/organization";
import { Observable } from "rxjs";
import { AdminService } from "src/app/core/admin/admin.service";
import { OrganizationService } from "src/app/core/organization/organization.service";
import { Role } from "src/app/core/models/role";
import { AuthService } from "src/app/core/service/auth.service";

@Component({
  selector: "app-add-member",
  templateUrl: "./add-member.component.html",
  styleUrls: ["./add-member.component.sass"],
})
export class AddMemberComponent implements OnInit {
  orgAdminForm: FormGroup;
  hide3 = true;
  agree3 = false;
  data$: Observable<Organization[]>;
  roles: Role;
  userOrganization: Organization;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private authService: AuthService,
    private orgService: OrganizationService,
    private snackBar: MatSnackBar
  ) {
    this.orgAdminForm = this.fb.group({
      name: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      organizationId: ["Surreytech", [Validators.required]],
      role: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.data$ = this.orgService.getAll();
    this.userOrganization = this.authService.currentUserValue.Organization;
  }

  saveAdmin() {
    this.adminService.createAdmin(this.orgAdminForm.value).subscribe(
      (data) => {
        console.log(data);

        this.showNotification(
          "black",
          "Add Admin Record Successfully...!!!",
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

  onSubmit() {
    this.saveAdmin();
    this.orgAdminForm.clearAsyncValidators();
  }
}
