import { NgModule } from '@angular/core';
import { NbCardModule, NbButtonModule, NbListModule, NbUserModule } from '@nebular/theme';

import { HighlightsComponent } from './highlights.component';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbUserModule,
  ],
  declarations: [
    HighlightsComponent,
  ],
  providers: [],
})
export class HighlightsModule { }
