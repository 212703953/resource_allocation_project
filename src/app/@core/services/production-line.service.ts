import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ProductionLine } from "../../models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class ProductionLineService {
  constructor(private http: HttpClient) {}

  private production_line: ProductionLine;

  getProductionLines(): Observable<ProductionLine[]> {
    return this.http.get<ProductionLine[]>(`${environment.apiUrl}/productionline`);
  }

  createProductionLine(production_line: ProductionLine): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/productionline`, production_line);
  }

  updateProductionLine(production_line: ProductionLine): Observable<ProductionLine> {
    return this.http.put<ProductionLine>(`${environment.apiUrl}/productionline`, production_line);
  }

  deleteProductionLine(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/productionline/${id}`);
  }
}
