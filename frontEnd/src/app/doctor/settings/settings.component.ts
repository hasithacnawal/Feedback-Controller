import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/service/auth.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.sass"],
})
export class SettingsComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
