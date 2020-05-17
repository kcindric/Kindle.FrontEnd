import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    NbCardModule,
  ],
  declarations: [
    NotFoundComponent,
  ],
})
export class NotFoundModule { }
