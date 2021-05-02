import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Survey } from "src/app/core/models/survey";
import { BehaviorSubject, Observable } from "rxjs";
import { Admin } from "../models/admin";

@Injectable({
  providedIn: "root",
})
export class SurveyService {
  private baseUrl = "http://localhost:5550/api/survey/";

  isTblLoading = true;
  dataChange: BehaviorSubject<Survey[]> = new BehaviorSubject<Survey[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Survey[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  postSurvey(survey: Survey): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, survey);
  }

  getAllSurvey(): void {
    this.httpClient.get<Survey[]>(this.baseUrl).subscribe(
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
  getSurveysByCreatorId(createrId): void {
    this.httpClient
      .get<Survey[]>(`${this.baseUrl}/findByOrgId/${createrId}`)
      .subscribe(
        (data) => {
          this.isTblLoading = false;
          this.dataChange.next(data);
          console.log("executed");
        },
        (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.log(error.name + " " + error.message);
        }
      );
  }
  getSurveysByOrgId(orgId): void {
    this.httpClient
      .get<Survey[]>(`${this.baseUrl}/findByOrgId/${orgId}`)
      .subscribe(
        (data) => {
          this.isTblLoading = false;
          this.dataChange.next(data);
          console.log("executed");
        },
        (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.log(error.name + " " + error.message);
        }
      );
  }

  updateSurvey(survey: Survey): void {
    this.dialogData = survey;

    /* this.httpClient.put(this.API_URL + doctors.id, doctors).subscribe(data => {
      this.dialogData = doctors;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteSurvey(id: number): void {
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
