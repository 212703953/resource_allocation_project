import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { OperatorsModule } from "./operators/operators.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { ThemeModule } from "../@theme/theme.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { CalendarHeaderComponent } from "./calendar-header.component";

import { CalendarModule } from 'angular-calendar';

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    OperatorsModule,
    CalendarModule,
    MiscellaneousModule,
  ],
  declarations: [...PAGES_COMPONENTS, CalendarHeaderComponent],
  exports: [CalendarHeaderComponent],
})
export class PagesModule {}
