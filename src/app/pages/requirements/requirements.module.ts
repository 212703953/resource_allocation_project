import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { RequirementsComponent } from "./requirements.component";
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
  declarations: [RequirementsComponent],
})
export class RequirementsModule {}