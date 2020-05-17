import { NgModule } from '@angular/core';
import { NbCardModule, NbButtonModule, NbListModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { UploadComponent } from './upload.component';

@NgModule({
  imports: [
    // ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbUserModule,
  ],
  declarations: [
    UploadComponent,
  ],
  providers: [],
})
export class UploadModule { }
