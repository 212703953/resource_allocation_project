import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { RouterModule, Routes } from "@angular/router";

import { OperatorsListComponent } from "./operators-list/operators-list.component";
import { OperatorsScheduleComponent } from "./operators-schedule/operators-schedule.component";
import { OperatorsEventsComponent } from './operators-events/operators-events.component';
import { OperatorsCapabilitiesComponent } from './operators-capabilities/operators-capabilities.component';

import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FlatpickrModule } from "angularx-flatpickr";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    ThemeModule,
    RouterModule,
    Ng2SmartTableModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [],
  declarations: [OperatorsListComponent, OperatorsScheduleComponent, OperatorsEventsComponent, OperatorsCapabilitiesComponent],
  providers: [],
})
export class OperatorsModule { }
