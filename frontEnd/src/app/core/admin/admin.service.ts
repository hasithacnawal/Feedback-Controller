import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Admin } from "../models/admin";

@Injectable()
export class AdminService {
  private baseUrl = "http://localhost:5550/api/admin/";
  isTblLoading = true;
  dataChange: BehaviorSubject<Admin[]> = new BehaviorSubject<Admin[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Admin[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  createAdmin(admin: Admin): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, admin);
  }
  addAdmin(admin: Admin): void {
    this.dialogData = admin;
    // this.httpClient.post(`${this.baseUrl}/`, admin).subscribe((data) => {
    //   this.dialogData = admin;
    // });
  }

  updateAdmin(admin: Admin): void {
    this.dialogData = admin;

    /* this.httpClient.put(this.API_URL + doctors.id, doctors).subscribe(data => {
      this.dialogData = doctors;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }

  getAll(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(`${this.baseUrl}`);
  }
  getAllAdmins(): void {
    this.httpClient.get<Admin[]>(this.baseUrl).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + " " + error.message);
      }
    );
  }
  getByOrgId(orgId): void {
    this.httpClient
      .get<Admin[]>(`${this.baseUrl}/findByOrgId/${orgId}`)
      .subscribe(
        (data) => {
          this.isTblLoading = false;
          this.dataChange.next(data);
        },
        (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.log(error.name + " " + error.message);
        }
      );
  }

  deleteAdmin(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }
}
