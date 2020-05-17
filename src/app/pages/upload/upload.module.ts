import { NgModule } from '@angular/core';
import { NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';

import { UploadComponent } from './upload.component';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
  ],
  declarations: [
    UploadComponent,
  ],
  providers: [],
})
export class UploadModule {}
