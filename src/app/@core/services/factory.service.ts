import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Factory } from "../../models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class FactoryService {
  constructor(private http: HttpClient) {}

  private factory: Factory;

  getFactories(): Observable<Factory[]> {
    return this.http.get<Factory[]>(`${environment.apiUrl}/factories`);
  }
}
