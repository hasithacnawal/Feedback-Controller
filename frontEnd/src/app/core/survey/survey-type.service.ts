import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SurveyType } from "../models/surveyType";

@Injectable({
  providedIn: "root",
})
export class SurveyTypeService {
  private readonly baseUrl = "http://localhost:5550/api/surveyTypes/";
  constructor(private http: HttpClient) {}

  getAll(): Observable<SurveyType[]> {
    return this.http.get<[SurveyType]>(`${this.baseUrl}`);
  }
}
