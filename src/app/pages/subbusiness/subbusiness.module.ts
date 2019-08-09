import { NgModule } from "@angular/core";
//import { RouterModule, Routes } from "@angular/router";
import { ThemeModule } from "../../@theme/theme.module";
import { SubBusinessComponent } from "./subbusiness.component";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
//import { FlatpickrModule } from "angularx-flatpickr";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { NbDialogModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),],
  exports: [],
  declarations: [SubBusinessComponent],
  entryComponents: [],
  providers: [],
})
export class SubBusinessModule { }