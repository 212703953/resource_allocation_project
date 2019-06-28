import { Component, OnInit } from "@angular/core";
//import { Operator } from "../../../models";
//import { UserService } from "../../../@core/mock/users.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: "ngx-schedule-factory",
  templateUrl: "schedule-factory.component.html",
})
export class ScheduleFactory implements OnInit {
  constructor(private usersService: UserService) {}

  public schedule-factory: ScheduleFactory[];

  ngOnInit() {
    this.usersService
      .getScheduleFactory()
      .subscribe(schedule-factory => (this.schedule-factory = schedule-factory));
  }
}
