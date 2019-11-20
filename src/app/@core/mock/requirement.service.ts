import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Requirement } from "../../models"

@Injectable()
export class RequirementService {
  public requirements: Requirement[] = [
    {
      id: 1,
      name: "Induction",
      requirement_type: "Training",
      //task: "Get access to the shopfloor",
    },

  ];

  private requirement : Requirement;

  getRequirements(): Observable<Requirement[]> {
    return observableOf(this.requirements);
  }

  getRequirementById(id: number): Requirement {
    return this.requirements.find(x => x.id === id);
  }

}
