import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AppComponent implements OnInit {

  menu: Array<NbMenuItem> = [
    {
      title: 'Upload',
      icon: 'shopping-cart-outline',
      link: '/upload',
      home: true,
    },
  ];

  constructor(private analytics: AnalyticsService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
