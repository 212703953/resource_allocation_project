import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Operator } from "../../models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class OperatorService {
  constructor(private http: HttpClient) {}

  private operator: Operator;

  getOperators(): Observable<Operator[]> {
    return this.http.get<Operator[]>(`${environment.apiUrl}/operator`);
  }

  createOperator(operator: Operator): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/operator`, operator);
  }

  updateOperator(operator: Operator): Observable<Operator> {
    return this.http.put<Operator>(`${environment.apiUrl}/operator`, operator);
  }

  deleteOperator(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/operator/${id}`);
  }
}
