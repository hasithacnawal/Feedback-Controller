import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Role } from "src/app/core/models/role";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private readonly baseUrl = "http://localhost:5550/api/role/";

  constructor(private httpClient: HttpClient) { 
  }

  getAllRoles(): Observable<Role[]>{

    return this.httpClient.get<Role[]>(`${this.baseUrl}`)

  }

 
}
