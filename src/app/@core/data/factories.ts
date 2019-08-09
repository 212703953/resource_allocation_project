import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Contacts, RecentUsers, UserData } from "../data/users";
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

  private factory : Factory;

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

  getFactories(): Observable<Factory[]> {
    return observableOf(this.factories);
  }

  getFactoryById(id: number): Factory {
    return this.factories.find(x => x.id === id);
  }
  
}
