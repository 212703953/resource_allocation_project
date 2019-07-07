import { NgModule } from "@angular/core";
//import { RouterModule, Routes } from "@angular/router";
import { ThemeModule } from "../../@theme/theme.module";
import { FactoryComponent } from "./factory.component";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
//import { FlatpickrModule } from "angularx-flatpickr";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
  ThemeModule,
  CommonModule,
  FormsModule,
  NgbModalModule],
  exports: [],
  declarations: [FactoryComponent],
  providers: [],
})
export class FactoryModule {}