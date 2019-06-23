import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OperatorsListComponent } from "./operators/operators-list/operators-list.component";
import { OperatorsScheduleComponent } from "./operators/operators-schedule/operators-schedule.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "home",
        component: DashboardComponent,
      },
      {
        path: "operators-list",
        component: OperatorsListComponent,
      },
      {
        path: "operators-schedule/:sso",
        component: OperatorsScheduleComponent,
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
