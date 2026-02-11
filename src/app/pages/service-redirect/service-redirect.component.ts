  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { AuthService } from 'src/app/services/auth/auth.service';

  @Component({
    selector: 'app-service-redirect',
    templateUrl: './service-redirect.component.html',
    styleUrls: ['./service-redirect.component.css']
  })
  export class ServiceRedirectComponent implements OnInit {

    constructor(
      private auth: AuthService,
      private router: Router
    ) { }

    ngOnInit(): void {

      const roleRaw = this.auth.getRole();
      const role = (roleRaw ?? '').replace('ROLE_', '').toUpperCase();
      console.log('role : ', role);

      if (role === 'HAIRDRESSER') {
        console.log("redirect to hairdresser");
        this.router.navigate(['/hairdresser/appointments']);
        return;
      } else if (role === 'CLIENT') {
        this.router.navigate(['/client/booking']);
        return;
      } else {
        this.router.navigate(['/authentification']);
        return;
      }
    }

  }
