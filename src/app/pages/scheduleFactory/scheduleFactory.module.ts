import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { RouterModule, Routes } from "@angular/router";

import { ScheduleFactoryComponent } from "./scheduleFactory.component";


import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FlatpickrModule } from "angularx-flatpickr";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    ThemeModule,
    RouterModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [],
  declarations: [ScheduleFactoryComponent],
  providers: [],
})
export class ScheduleFactoryModule {}
