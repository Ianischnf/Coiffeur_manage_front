import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Appointment, AppointmentService } from 'src/app/services/appointment.service';

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

  constructor(private appointmentService : AppointmentService){}

  ngOnInit(): void {
    this.onfetchAllAppointmentHairdresser();
  }

  appointments : Appointment[] = [];

  displayedColumns: string[] = ['client', 'description', 'status', "date", "actions"];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  //récupération des rdv
  onfetchAllAppointmentHairdresser(){
    this.appointmentService.fetchAllAppointmentHairdresser().subscribe({
      next: (res) => {
        this.appointments = res
        console.log('RDV : ', this.appointments);
      },
      error: (err) => {
        console.log("Erreur", err);
      }
    })
  }

  //Accepté un rdv
  onAcceptAppointment(appointmentId: number) {

    this.appointmentService.AcceptAppointment(appointmentId).subscribe({
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
    this.appointmentService.RefuseAppointment(appointmentId).subscribe({
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

}
