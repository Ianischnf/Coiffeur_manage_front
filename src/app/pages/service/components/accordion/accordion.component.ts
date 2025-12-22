import { Component } from '@angular/core';
import { Appointment, AppointmentRequest, AppointmentService } from 'src/app/services/appointment.service';
import { HairDresserResponse, hairdresserService } from 'src/app/services/hairdresser.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  form: AppointmentRequest = {
    startAt: '',
    durationMinutes: 30,
    hairdresser: '',
    note: ''
  }

  constructor(private appointmentService: AppointmentService,
              private hairdresserService: hairdresserService) {}

  ngOnInit(): void {
    this.onFetchAllAppointment();
    this.onFetchHairDresser();
  }

  hairdressers: HairDresserResponse[] = [];
  appointments: Appointment[] = [];
  items = ['Planifier un rendez-vous', 'Modifier un rendez-vous', 'Annuler un rendez-vous'];
  expandedIndex = 0;

  trackByRdv(index: number, rdv: Appointment): number {
    return rdv.appointmentId;
  }

  onCreateAppointment() {
    this.appointmentService.createAppointment(this.form).subscribe({
      next: (res) => {
        console.log("Création du rdv réussi", res);
      },

      error: (err) => {
        console.log("Erreur lors del a création d'un rdv", err);
      }
    })
  }

  onFetchAllAppointment() {
    this.appointmentService.fetchAllAppointment().subscribe({
      next: (res) => {
        this.appointments = res;
      },
      error: (err) => {
        console.log("Erreur", err);
      }
    });
  }

  onFetchHairDresser() {
    this.hairdresserService.fetchHairDresserList().subscribe({
      next: (res) => {
        this.hairdressers = res;
       console.log(res);
      },
      error: (err) => {
        console.log("Erreur", err);
      }
    })
  }

  onDeleteAppointment(appointmentId: number) {
    this.appointmentService.deleteAppointment(appointmentId).subscribe({
      next: () => console.log("Rdv supprimé"),
      error: (err) => console.log("Erreur lors de la suppression du rdv", err),
    })
  }


}


