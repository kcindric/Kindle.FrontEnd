import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { UploadComponent } from './upload/upload.component';
import { HighlightsComponent } from './highlights/highlights.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'upload',
      component: UploadComponent,
    },
    {
      path: 'highlights',
      component: HighlightsComponent,
    },
    {
      path: '',
      redirectTo: 'upload',
      pathMatch: 'full',
    },
    // {
    //   path: '**',
    //   loadChildren: () => import('./not-found/not-found.module')
    //     .then(m => m.NotFoundModule),
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
