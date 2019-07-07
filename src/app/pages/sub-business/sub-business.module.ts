import { NgModule } from "@angular/core";

import { ThemeModule } from "../../@theme/theme.module";
import { SubBusinessComponent } from "./sub-business.component";

@NgModule({
  imports: [ThemeModule],
  declarations: [SubBusinessComponent],
})
export class SubBusinessModule {}