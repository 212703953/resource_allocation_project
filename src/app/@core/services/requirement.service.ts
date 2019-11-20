import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Requirement } from "../../models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class RequirementService {
  constructor(private http: HttpClient) {}

  private requirement: Requirement;

  getRequirements(): Observable<Requirement[]> {
    return this.http.get<Requirement[]>(`${environment.apiUrl}/requirement`);
  }

  createRequirement(requirement: Requirement): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/requirement`, requirement);
  }

  updateRequirement(requirement: Requirement): Observable<Requirement> {
    return this.http.put<Requirement>(`${environment.apiUrl}/requirement`, requirement);
  }

  deleteRequirement(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/requirement/${id}`);
  }
}
