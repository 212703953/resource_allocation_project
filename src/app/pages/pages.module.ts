import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { OperatorsModule } from "./operators/operators.module";
import { ScheduleFactoryModule } from "./scheduleFactory/scheduleFactory.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { ThemeModule } from "../@theme/theme.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { CalendarHeaderComponent } from "./calendar-header.component";

import { CalendarModule } from "angular-calendar";
import { FactoryModule } from './factory/factory.module';
import { SubBusinessModule } from './sub-business/sub-business.module';
import { RequirementsModule } from './requirements/requirements.module';

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    OperatorsModule,
    ScheduleFactoryModule,
    RequirementsModule,
    FactoryModule,
    SubBusinessModule,
    CalendarModule,
    MiscellaneousModule,
  ],
  declarations: [...PAGES_COMPONENTS, CalendarHeaderComponent],
  exports: [CalendarHeaderComponent],
})
export class PagesModule {}
