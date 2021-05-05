import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "../models/question";

@Injectable({
  providedIn: "root",
})
export class QuestionService {
  private readonly baseUrl = "http://localhost:5550/api/questions/";
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Question[]> {
    return this.httpClient.get<[Question]>(`${this.baseUrl}`);
  }
}
