import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/core/models/appointment.model';
import { AppointmentResponseStatus } from './dtos/appointment-hairdresser.dto';

@Injectable({ providedIn: 'root' })
export class HairdresserAppointmentService {
  private baseUrl = 'http://localhost:8083/hairdresser/appointments';

  constructor(private http: HttpClient) {}

  fetchAllAppointmentHairdresser(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseUrl);
  }

  acceptAppointment(appointmentId: number): Observable<AppointmentResponseStatus> {
    return this.http.patch<AppointmentResponseStatus>(
      `${this.baseUrl}/${appointmentId}/accept`,
      null
    );
  }

  refuseAppointment(appointmentId: number): Observable<AppointmentResponseStatus> {
    return this.http.patch<AppointmentResponseStatus>(
      `${this.baseUrl}/${appointmentId}/reject`,
      null
    );
  }
}
