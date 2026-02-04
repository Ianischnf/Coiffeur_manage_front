import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { Appointment } from 'src/app/core/models/appointment.model';
import { HairdresserAppointmentService } from 
  'src/app/features/hairdresser/appointments/hairdresser-appointments.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css'],
})


export class AppointmentTableComponent implements OnInit {

  constructor(private hairdresserAppointmentService : HairdresserAppointmentService){}

  ngOnInit(): void {
    this.onfetchAllAppointmentHairdresser();
  }

  // Source de vérité : la liste complète, jamais modifiée
  allAppointments: Appointment[] = [];

  // Liste affichée dans le mat-table (filtrée)
  appointments: Appointment[] = [];

  //Ce que l’utilisateur a coché 
  selectedStatuses: string[] = [] // ex: ['PENDING', 'ACCEPTED']

  displayedColumns: string[] = ['client', 'description', 'status', "date", "actions"];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  //récupération des rdv
  onfetchAllAppointmentHairdresser(){
    this.hairdresserAppointmentService.fetchAllAppointmentHairdresser().subscribe({
      next: (res) => {
        this.allAppointments  = res;
        this.appointments     = res;
        console.log('RDV : ', this.appointments);
      },
      error: (err) => {
        console.log("Erreur", err);
      }
    })
  }

  //Accepté un rdv
  onAcceptAppointment(appointmentId: number) {

    this.hairdresserAppointmentService.acceptAppointment(appointmentId).subscribe({
      next: (res) => {
        console.log('RDV accepté ', res);
      },
      error: (err) => {
        console.log("Erreur", err);
      }
    })

  }

  //Refuser un rdv
  onRefuseAppointment(appointmentId: number){
    this.hairdresserAppointmentService.refuseAppointment(appointmentId).subscribe({
      next: (res) => {
        console.log('RDV refusé', res);
      },
      error: (err) => {
        console.log("Erreur", err);
      }
    })
  }

  // Gestion classe CSS des status
  getSatusClass(status: string | null) : string {
    switch(status){
      case 'PENDING':
        return 'status-pending';
      case 'ACCEPTED':
        return 'status-accepted';
      case 'REFUSED' :
        return 'status-refused';
      default :
        return '';
    }
  }

  onStatusChange(status: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;

    if(checked){
      this.selectedStatuses.push(status);
    } else {
      this.selectedStatuses = this.selectedStatuses.filter(s => s !== status);
    }

    this.applyFilter();
  }

  //filtre le status
    applyFilter(): void {
    // Si aucune case cochée -> on affiche tout
    if (this.selectedStatuses.length === 0) {
      this.appointments = this.allAppointments;
      return;
    }

    // Sinon, on garde uniquement ceux dont le status est dans selectedStatuses
    this.appointments = this.allAppointments.filter(app =>
      app.status !== null && this.selectedStatuses.includes(app.status)
    );
  }

}
