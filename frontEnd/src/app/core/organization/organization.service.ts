import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import{Organization} from 'src/app/core/models/organization';
import { Observable } from 'rxjs';
import { BehaviorSubject } from "rxjs";



//

@Injectable()
export class OrganizationService {
  private readonly baseUrl = "http://localhost:5550/api/organization/";
  isTblLoading = true;
  dataChange: BehaviorSubject<Organization[]> = new BehaviorSubject<Organization[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Organization[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */

  //
  createOrganization(org: Organization): Observable<Object>{

    return this.httpClient.post(`${this.baseUrl}`, org)

  }
  //
  getAllOrganizations(): void {
    this.httpClient.get<Organization[]>(this.baseUrl).subscribe(
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
  addOrganization(Organization: Organization): void {
    this.dialogData = Organization;

    /*  this.httpClient.post(this.API_URL, Organization).subscribe(data => {
      this.dialogData = Organization;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateOrganization(Organization: Organization): void {
    this.dialogData = Organization;

    /* this.httpClient.put(this.API_URL + Organization.id, Organization).subscribe(data => {
      this.dialogData = Organization;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteOrganization(id: number): void {
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

