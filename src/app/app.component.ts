import { Component } from '@angular/core';
import { Router,NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rdv-front';

  constructor(private router: Router) {
  this.router.events.subscribe(e => {
    if (e instanceof NavigationStart) console.log('[Router] start', e.url);
    if (e instanceof NavigationEnd) console.log('[Router] end', e.urlAfterRedirects);
    if (e instanceof NavigationCancel) console.log('[Router] cancel', e.reason);
    if (e instanceof NavigationError) console.log('[Router] error', e.error);
  });
}
}
