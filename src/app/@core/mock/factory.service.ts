import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Factory } from "../../models"

@Injectable()
export class FactoryService {
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

  private factory : Factory;

  getFactories(): Observable<Factory[]> {
    return observableOf(this.factories);
  }

  getFactoryById(id: number): Factory {
    return this.factories.find(x => x.id === id);
  }

}
