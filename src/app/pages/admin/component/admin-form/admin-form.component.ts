import { Component } from '@angular/core';
import { HairDresserRequest, hairdresserService } from 'src/app/services/hairdresser.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent {

  form: HairDresserRequest = {
    FirstName: '',
    LastName: '',
    Email: '',
    Password: ''
  }
  
  constructor(private hairdresserService: hairdresserService) { }

  onCreateHairdresser() {

    const payload: HairDresserRequest = {
      FirstName: this.form.FirstName,
      LastName: this.form.LastName,
      Email: this.form.Email,
      Password: this.form.Password
    };

    this.hairdresserService.addHairdresser(payload).subscribe({
      next: (res) => {
        console.log("Création du coiffeur réussi", res);
      },
      error: (err) => {
        console.log("Erreur lors de la création du coiffeur", err);
      }

    })
  }
}
