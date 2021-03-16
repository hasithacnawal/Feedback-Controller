import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable,of } from "rxjs";
import {User}         from '../models/user.model';
import { map, catchError } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private baseUrl = "http://localhost:5550/api/user";

  constructor(private http : HttpClient) { }

  userLogin(payload:User):Observable<string>{


    //return this.http.post<User>(`${this.baseUrl}/login`,payload,  { responseType: 'text'})

    return this.http.post(`${this.baseUrl}/login`, payload,{ responseType: 'text'});



  }
}
