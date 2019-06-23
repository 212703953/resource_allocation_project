import { Component, OnInit } from "@angular/core";
import { Operator } from "../../../models";
import { UserService } from "../../../@core/mock/users.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: "ngx-operators-list",
  templateUrl: "operators-list.component.html",
})
export class OperatorsListComponent implements OnInit {
  constructor(private usersService: UserService) {}

  public operators: Operator[];

  ngOnInit() {
    this.usersService
      .getOperators()
      .subscribe(operators => (this.operators = operators));
  }
}
