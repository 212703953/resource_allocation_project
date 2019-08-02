import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ProductionLine } from "../../models"
//import  { Requirement } from "../../models"

@Injectable()
export class ProductionLineService {
  public productionLines: ProductionLine[] = [
    {
      id: 1,
      name: "Line 1",
      factory : "Montoir-de-Bretagne",

    },

  ];

  private productionLine : ProductionLine;

  getProductionLines(): Observable<ProductionLine[]> {
    return observableOf(this.productionLines);
  }

  getProductionLineById(id: number): ProductionLine {
    return this.productionLines.find(x => x.id === id);
  }

//   getTaskRequirements(id:number):Requirement[]{
//     return this.tasks.find(x=>x.id===id).requirements;
//   }

}
