import { Observable } from "rxjs";

export interface User {
  name: string;
  picture: string;
}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class UserData {
  abstract getUser(): Observable<User>;
  abstract getContact(): Observable<Contacts>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
}
