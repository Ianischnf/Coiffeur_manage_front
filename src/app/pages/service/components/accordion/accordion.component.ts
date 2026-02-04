import { Component, OnInit } from '@angular/core';

import { Appointment } from 'src/app/core/models/appointment.model';
import { AppointmentRequest } from 'src/app/features/client/appointments/dtos/appointment-client.dto';
import { ClientAppointmentService } from 'src/app/features/client/appointments/client-appointments.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  form: AppointmentRequest = {
    startAt: '',
    note: '',
    hairdresserId: null,
    
  }

  constructor(private clientAppointmentService : ClientAppointmentService) {}

  ngOnInit(): void {
    this.onFetchAllAppointment();
  }
  appointments: Appointment[] = [];
  items = ['Planifier un rendez-vous', 'Modifier un rendez-vous', 'Annuler un rendez-vous'];
  expandedIndex = 0;

  trackByRdv(index: number, rdv: Appointment): number {
    return rdv.appointmentId;
  }

  onCreateAppointment() {

    console.log("FORM AVANT ENVOI", this.form);

    if(this.form.hairdresserId == null) {
      console.log("coiffeur vaux nul");
      return
    }
    this.clientAppointmentService.createAppointment(this.form).subscribe({
      next: (res) => {
        console.log("Création du rdv réussi", res);
      },

      error: (err) => {
        console.log("Erreur lors del a création d'un rdv", err);
      }
    })
  }

  onFetchAllAppointment() {
    this.clientAppointmentService.fetchAllAppointment().subscribe({
      next: (res) => {
        this.appointments = res;
      },
      error: (err) => {
        console.log("Erreur", err);
      }
    });
  }

  onDeleteAppointment(appointmentId: number) {
    this.clientAppointmentService.deleteAppointment(appointmentId).subscribe({
      next: () => console.log("Rdv supprimé"),
      error: (err) => console.log("Erreur lors de la suppression du rdv", err),
    })
  }


}


