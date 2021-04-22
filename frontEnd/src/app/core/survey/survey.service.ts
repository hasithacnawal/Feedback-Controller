import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Survey} from 'src/app/core/models/survey'

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private baseUrl = "http://localhost:5550/api/survey/";
  
  constructor(private httpClient: HttpClient) { }

  postSurvey(survey: Survey){

    this.httpClient.post(`${this.baseUrl}`, survey)

  }
}
