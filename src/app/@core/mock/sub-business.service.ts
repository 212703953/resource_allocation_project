import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { SubBusiness } from "../../models"
//import  { Requirement } from "../../models"

@Injectable()
export class SubBusinessService {
  public subBusinesses: SubBusiness[] = [
    {
      id: 1,
      name: "Line 1",

    },

  ];

  private subbusiness : SubBusiness;

  getSubBusinesses(): Observable<SubBusiness[]> {
    return observableOf(this.subBusinesses);
  }

  getSubBusinessById(id: number): SubBusiness {
    return this.subBusinesses.find(x => x.id === id);
  }

//   getTaskRequirements(id:number):Requirement[]{
//     return this.tasks.find(x=>x.id===id).requirements;
//   }

}
