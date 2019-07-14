import { NgModule } from "@angular/core";

import { ThemeModule } from "../../@theme/theme.module";
import { RequirementsComponent } from "./requirements.component";

@NgModule({
  imports: [ThemeModule],
  declarations: [RequirementsComponent],
})
export class RequirementsModule {}