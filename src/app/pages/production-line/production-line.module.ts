import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { ProductionLineComponent } from "./production-line.component";
import { NbDialogModule } from '@nebular/theme';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProductionLineService } from '../../@core/mock/production-line.service';

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
  entryComponents: [],
  providers: [ProductionLineService],
})
export class ProductionLineModule {}