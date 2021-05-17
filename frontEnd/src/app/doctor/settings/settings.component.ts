import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/service/auth.service";
import {Admin} from "src/app/core/models/admin";
import { BehaviorSubject, Observable } from "rxjs";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.sass"],
})
export class SettingsComponent implements OnInit {

  public currentUserSubject:BehaviorSubject<Admin>;
  public form: FormGroup;

  admin$:Observable<Admin>;
  constructor(private authService: AuthService) {

    this.form = new FormGroup({
      name: new FormControl(''),
    });
   
  }

  ngOnInit(): void {

    console.log(localStorage.getItem("currentUser"));
    this.currentUserSubject = new BehaviorSubject<Admin>(
      JSON.parse(localStorage.getItem("currentUser"))
    );

    this.form.patchValue({
      name: this.currentUserSubject.value.name,
      });

    console.log(this.currentUserSubject);
  }

  

  
}
