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

  onAcceptAppointment(AppointmentId: number) {

    this.appointmentService.AcceptAppointment(AppointmentId).subscribe({
      next: (res) => {
        console.log('RDV accepté ', res);
      },
      error: (err) => {
        console.log("Erreur", err);
      }
    })

  }

}
