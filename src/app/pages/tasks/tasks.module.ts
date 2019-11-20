import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { TasksComponent } from "./tasks.component";
import { NbDialogModule } from '@nebular/theme';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TaskService } from "../../@core/services/task.service";


@NgModule({
  imports: [
    ThemeModule,
    //CommonModule,
    //FormsModule,
    NgbModalModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),
  ],
  declarations: [TasksComponent],
  entryComponents: [],
  providers: [TaskService],
})
export class TasksModule {}