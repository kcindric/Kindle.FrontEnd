import { NgModule } from '@angular/core';
import { NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';

import { UploadComponent } from './upload.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    ThemeModule,
  ],
  declarations: [
    UploadComponent,
  ],
  providers: [],
})
export class UploadModule {}
