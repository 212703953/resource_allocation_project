import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Factory } from "../../models"

Injectable()
export class FactoryData {
  private time: Date = new Date();
  public factories: Factory[] = [
    {
      id: 1,
      name: "Salzbergen",
      business: "Onshore Wind",
      shift1: "True",
      shift2: "True",
      shift3: "False",
    },
    {
        id: 2,
        name: "Saint-Nazaire",
        business: "Offshore Wind",
        shift1: "True",
        shift2: "False",
        shift3: "True",
    },
  ];
  getFactories(): Observable<Factory[]> {
    return observableOf(this.factories);
  }
}
