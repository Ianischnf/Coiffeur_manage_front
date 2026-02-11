import { Component, OnInit } from '@angular/core';

import { Appointment } from 'src/app/core/models/appointment.model';
import { AppointmentRequest } from 'src/app/features/client/appointments/dtos/appointment-client.dto';
import { ClientAppointmentService } from 'src/app/features/client/appointments/client-appointments.service';


type AlertType = 'success' | 'error' | 'delete'; //Union Type

interface Alert {
  type : AlertType;
  message : string;
}

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

  appointments: Appointment[] = []; //Contient les RDV qui ont été mis par le fetchAll

  items = ['Planifier un rendez-vous', 'Modifier un rendez-vous', 'Annuler un rendez-vous'];
  expandedIndex = 0;

  createAppointmentAlert: Alert| null = null; //alerte personnaliser création/suppresion
  deleteAppointmentAlert: Alert | null = null;

  trackByRdv(index: number, rdv: Appointment): number {
    return rdv.appointmentId;
  }

  onCreateAppointment() {
    console.log("StartAt", this.form.startAt, " | JSON = ", JSON.stringify(this.form.startAt));
    if (this.form.hairdresserId == null) return;
    if (!this.form.startAt || this.form.startAt.trim() === '') {
      this.createAppointmentAlert = {
        type: 'error',
        message: 'La date est obligatoire'
      }
      return;
    }


    const payload: AppointmentRequest = {
      startAt: this.form.startAt.trim(),
      note: this.form.note,
      hairdresserId: this.form.hairdresserId,
    };

    this.clientAppointmentService.createAppointment(payload).subscribe({
      next: (res) => {
        console.log("Création du rdv réussi", res),
          this.createAppointmentAlert = {
            type: 'success',
            message: 'Rendez-vous créer avec succès.'
          }
      },
      error: (err) => console.log("Erreur lors de la création d'un rdv", err),
    });
  }


  onFetchAllAppointment() {
    this.clientAppointmentService.fetchAllAppointment().subscribe({
      next: (res) => {
        this.appointments = res;
        console.log("OBJET RDV : ", res)
      },
      error: (err) => {
        console.log("Erreur", err);
      }
    });
  }

  onDeleteAppointment(appointmentId: number) {
    this.clientAppointmentService.deleteAppointment(appointmentId).subscribe({
      next: () => {
        this.appointments = this.appointments.filter(app => app.appointmentId !== appointmentId);
        this.deleteAppointmentAlert = {
          type: 'delete',
          message: 'Rendez-vous supprimer'
        }
      },
      error: (err) => {
        console.log("Erreur", err);
      }

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


