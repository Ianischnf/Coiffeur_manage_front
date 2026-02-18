import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role = '';

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    const raw = this.authService.getRole();

    this.role = (raw ?? '').replace('ROLE_', '');
  }

  get isAdmin() { return this.role == 'ADMIN'; }
  get isHairdresser() { return this.role == 'HAIRDRESSER'; }
  get isClient() { return this.role == 'CLIENT'; }


}


