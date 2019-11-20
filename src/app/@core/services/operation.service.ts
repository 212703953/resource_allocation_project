import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Operation } from "../../models"
//import  { Requirement } from "../../models"
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class OperationService {
 
  constructor(private http: HttpClient) {}

  private operation: Operation;

  getOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(`${environment.apiUrl}/operation`);
  }

  createOperation(operation: Operation): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/operation`, operation);
  }

  updateOperation(operation: Operation): Observable<Operation> {
    return this.http.put<Operation>(`${environment.apiUrl}/operation`, operation);
  }

  deleteOperation(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/operation/${id}`);
  }

}
