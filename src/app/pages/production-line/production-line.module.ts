import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { ProductionLineComponent } from "./production-line.component";
import { NbDialogModule } from '@nebular/theme';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),
  ],
  declarations: [ProductionLineComponent],
  entryComponents: [],
  providers: [],
})
export class ProductionLineModule {}