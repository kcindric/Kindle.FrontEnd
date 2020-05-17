import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu: Array<NbMenuItem> = [
    {
      title: 'Upload',
      icon: 'cloud-upload-outline',
      link: '/pages/upload',
      home: true,
    },
    {
      title: 'Highlights',
      icon: 'star-outline',
      link: '/pages/highlights',
    },
  ];
}
