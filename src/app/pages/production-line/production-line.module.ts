import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { ProductionLineComponent } from "./production-line.component";
import { NbDialogModule } from '@nebular/theme';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    //CommonModule,
    //FormsModule,
    NgbModalModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),
  ],
  declarations: [ProductionLineComponent],
})
export class ProductionLineModule {}