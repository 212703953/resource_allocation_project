import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Contacts, RecentUsers, UserData } from "../data/users";

@Injectable()
export class UserService extends UserData {
  private time: Date = new Date();

  private user = {
    name: "Maco",
    picture: "assets/images/nick.png",
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
}
