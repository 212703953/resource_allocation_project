import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { SubBusinessComponent } from "./sub-business.component";
import { NbDialogModule } from '@nebular/theme';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SubBusinessService } from '../../@core/services/sub-business.service';

@NgModule({
  imports: [
    ThemeModule,
    //CommonModule,
    //FormsModule,
    NgbModalModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),
  ],
  declarations: [SubBusinessComponent],
  entryComponents: [],
  providers: [SubBusinessService],
})
export class SubBusinessModule {}