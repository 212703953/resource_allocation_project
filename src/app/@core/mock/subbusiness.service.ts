import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Subbusiness } from "../../models"

@Injectable()
export class SubbusinessService {
  public subbusinesss: Subbusiness[] = [
    {
      id: 1,
      name: "Salzbergen",
    },
    {
        id: 2,
        name: "Saint-Nazaire",
    },
  ];

  private subbusiness : Subbusiness;

  getSubbusinesss(): Observable<Subbusiness[]> {
    return observableOf(this.subbusinesss);
  }

  getSubbusinessById(id: number): Subbusiness {
    return this.subbusinesss.find(x => x.id === id);
  }

}
