import { Component } from '@angular/core';
import { Appointment, AppointmentRequest, AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  form: AppointmentRequest = {
    startAt: '',
    endAt: '',
    note: ''
  }

  constructor(private appointmentService: AppointmentService) { }

    ngOnInt(): void{
    
  }

  appointments: Appointment[] = [];
  items = ['Planifier un rendez-vous', 'Modifier un rendez-vous', 'Annuler un rendez-vous'];
  expandedIndex = 0;

  trackByItem(index: number, item: string) {
    return item; // ou return index;
  }

  onCreateAppointment() {
    this.appointmentService.createAppointment(this.form).subscribe({
      next: (rest) => {
        console.log("Création du rdv réussi");
      },

      error: (err) => {
        console.log("Erreur lors del a création d'un rdv", err);
      }
    })
  }

}
