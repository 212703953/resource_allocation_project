import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OperatorsListComponent } from "./operators/operators-list/operators-list.component";
import { OperatorsScheduleComponent } from "./operators/operators-schedule/operators-schedule.component";
import { ScheduleFactoryComponent } from "./scheduleFactory/scheduleFactory.component";
import { FactoryComponent } from "./factory/factory.component";
import{ SubBusinessComponent } from "./sub-business/sub-business.component";
import { RequirementsComponent } from './requirements/requirements.component';


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
        path : "scheduleFactory",
        component : ScheduleFactoryComponent,
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
        path: "requirements",
        component: RequirementsComponent,
      },
      {
        path: "factory",
        component: FactoryComponent,
      },
      {
        path: "sub-business",
        component: SubBusinessComponent,
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
