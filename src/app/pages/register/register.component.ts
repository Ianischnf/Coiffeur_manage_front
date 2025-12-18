import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService, RegisterRequest } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: RegisterRequest = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) { }

  onRegister() {
    this.authService.register(this.form).subscribe({
      next: (res) => {
        console.log("Inscription réussi", res)
      },

      error: (err) => {
        console.log("Erreur lors de l'inscription", err);
      }
    })
  }
}
