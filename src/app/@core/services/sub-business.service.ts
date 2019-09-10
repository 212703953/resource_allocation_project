import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { SubBusiness } from "../../models"
//import  { Requirement } from "../../models"
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class SubBusinessService {
 
  constructor(private http: HttpClient) {}

  private subbusiness: SubBusiness;

  getSubBusinesses(): Observable<SubBusiness[]> {
    return this.http.get<SubBusiness[]>(`${environment.apiUrl}/subbusiness`);
  }

  createSubBusiness(subbusiness: SubBusiness): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/subbusiness`, subbusiness);
  }

  updateSubBusiness(subbusiness: SubBusiness): Observable<SubBusiness> {
    return this.http.put<SubBusiness>(`${environment.apiUrl}/subbusiness`, subbusiness);
  }

  deleteSubBusiness(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/subbusiness/${id}`);
  }

}
