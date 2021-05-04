import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { Admin } from "../models/admin";
import { Organization } from "../models/organization";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Admin>;
  public currentUser: Observable<Admin>;
  userOrganizationSubject: BehaviorSubject<Organization>;
  public userOrganization: Observable<Organization>;

  private baseUrl = "http://localhost:5550/api/admin/";
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Admin>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    this.userOrganizationSubject = new BehaviorSubject<Organization>(
      JSON.parse(localStorage.getItem("userOrganization"))
    );
    this.userOrganization = this.userOrganizationSubject.asObservable();
  }
  public get userOrgValue(): Organization {
    return this.userOrganizationSubject.value;
  }
  public get currentUserValue(): Admin {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${this.baseUrl}/login`, {
        email,
        password,
      })
      .pipe(
        map((value) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          localStorage.setItem("currentUser", JSON.stringify(value.value));
          localStorage.setItem(
            "userOrganization",
            JSON.stringify(value.value.Organization)
          );
          this.currentUserSubject.next(value.value);
          this.userOrganizationSubject.next(value.value.Organization);
          return value;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
    return of({ success: false });
  }
}
