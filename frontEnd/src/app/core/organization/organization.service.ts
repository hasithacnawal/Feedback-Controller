import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Organization} from 'src/app/core/models/organization';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private baseUrl = "http://localhost:5550/api/organization/";

  constructor(private httpCilent : HttpClient) { }

  createOrganization(org: Organization): Observable<Object>{

    return this.httpCilent.post(`${this.baseUrl}`, org)

  }
}
