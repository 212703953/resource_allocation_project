import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Contacts, RecentUsers, UserData } from "../data/users";
import { Operator } from "../../models";

@Injectable()
export class UserService {
  private time: Date = new Date();
  public operators: Operator[] = [
    {
      id: 1,
      firstName: "Vianney",
      lastName: "Mixtur",
      contractType: "permanent",
      manager: "Fabio Jordao",
      position: "DTLP",
      sap: 212703953,
      scope: "Office",
      shift: "Office Hours",
      sso: 212703953,
    },
    {
      id: 2,
      firstName: "Amina",
      lastName: "Djeldjel",
      contractType: "Intern",
      manager: "Fabio Jordao",
      position: "DTLP Intern",
      sap: 212752335,
      scope: "Remote",
      shift: "Office Hours",
      sso: 212752335,
    },
  ];

  private operator: Operator;

  private user = {
    name: "User",
    picture: "assets/images/Portrait_Placeholder.png",
  };
  private types = {
    mobile: "mobile",
    home: "home",
    work: "work",
  };
  private contact: Contacts = { user: this.user, type: this.types.mobile };
  private recentUsers: RecentUsers[] = [
    {
      user: this.user,
      type: this.types.mobile,
      time: this.time.setHours(5, 29),
    },
  ];

  getUser(): Observable<any> {
    return observableOf(this.user);
  }

  getContact(): Observable<Contacts> {
    return observableOf(this.contact);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }

  getOperators(): Observable<Operator[]> {
    return observableOf(this.operators);
  }

  getOperatorBySso(sso: number): Operator {
    return this.operators.find(x => x.sso === sso);
  }
}
