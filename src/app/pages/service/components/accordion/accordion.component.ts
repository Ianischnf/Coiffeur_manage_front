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

  constructor(private clientAppointmentService: ClientAppointmentService) { }

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
    console.log("StartAt", this.form.startAt, " | JSON = ", JSON.stringify(this.form.startAt));
    if (this.form.hairdresserId == null) return;
    if (!this.form.startAt || this.form.startAt.trim() === '') {
      return;
    }


    const payload: AppointmentRequest = {
      startAt: this.form.startAt.trim(),
      note: this.form.note,
      hairdresserId: this.form.hairdresserId,
    };

    this.clientAppointmentService.createAppointment(payload).subscribe({
      next: (res) => console.log("Création du rdv réussi", res),
      error: (err) => console.log("Erreur lors de la création d'un rdv", err),
    });
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


  onDateSelected(event: any) {
    console.log('selectedDate event =', event, 'type=', typeof event);

    // cas où le datepicker renvoie déjà une string
    if (typeof event === 'string') {
      this.form.startAt = event;
      console.log('startAt <- string', this.form.startAt);
      return;
    }

    // cas où il renvoie un Date
    if (event instanceof Date) {
      this.form.startAt = event.toISOString();
      console.log('startAt <- Date ISO', this.form.startAt);
      return;
    }

    // cas null/undefined/autre
    this.form.startAt = '';
    console.log('startAt <- empty (event null/invalid)');
  }

}


