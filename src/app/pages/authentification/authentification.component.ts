import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, LoginRequest } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {

  loginType : 'CLIENT' | 'HAIRDRESSER' = 'CLIENT';

    form: LoginRequest = {
      email: '',
      password: ''
    }

    constructor(private authService : AuthService,
                private router : Router
    ) {}

    onLoginClient(){
      this.authService.loginClient(this.form).subscribe({
        next: (res) => {
          this.authService.setToken(res.token);
          console.log("Utilsateur connecté", res);
          this.router.navigate(["/home"])
        },

        error:(err) => {
          console.log("Erreur lors de la connexion",err);
        }
      })
    }

    onLoginHairDresser(){
      this.authService.loginHairDresser(this.form).subscribe({
        next: (res) => {
          this.authService.setToken(res.token);
          console.log("Coiffeur connecté", res);
          console.log(this.authService.getRole());
          this.router.navigate(["/home"]);
        }
      })
    }

    onLogin(){
      if(this.loginType === 'CLIENT') {
        this.onLoginClient();
      } else {
        this.onLoginHairDresser();
      }
    }
}
