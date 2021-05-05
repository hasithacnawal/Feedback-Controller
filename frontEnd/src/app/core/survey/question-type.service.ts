import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { QuestionType } from "../models/questionType";

@Injectable({
  providedIn: "root",
})
export class QuestionTypeService {
  private readonly baseUrl = "http://localhost:5550/api/questionTypes/";
  constructor(private http: HttpClient) {}

  getAll(): Observable<QuestionType[]> {
    return this.http.get<[QuestionType]>(`${this.baseUrl}`);
  }
}
