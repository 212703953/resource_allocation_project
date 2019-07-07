import { NgModule } from "@angular/core";

import { ThemeModule } from "../../@theme/theme.module";
import { FactoryComponent } from "./factory.component";

@NgModule({
  imports: [ThemeModule],
  declarations: [FactoryComponent],
})
export class FactoryModule {}