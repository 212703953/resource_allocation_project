import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ThemeModule } from "../../@theme/theme.module";
import { RequirementsComponent } from "./requirements.component";
import { NbDialogModule } from '@nebular/theme';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RequirementService } from '../../@core/services/requirement.service';


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
  entryComponents: [],
  providers: [RequirementService],
})
export class RequirementsModule {}