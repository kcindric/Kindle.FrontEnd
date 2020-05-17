import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UploadModule } from './upload/upload.module';
import { HighlightsModule } from './highlights/highlights.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    UploadModule,
    HighlightsModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
