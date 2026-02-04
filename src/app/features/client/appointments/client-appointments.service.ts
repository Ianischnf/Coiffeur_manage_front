import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/core/models/appointment.model';
import { AppointmentRequest } from './dtos/appointment-client.dto';

@Injectable({ providedIn: 'root' })
export class ClientAppointmentService {
  private baseUrl = 'http://localhost:8083/client/appointment';

  constructor(private http: HttpClient) {}

  createAppointment(data: AppointmentRequest): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseUrl, data);
  }

  fetchAllAppointment(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseUrl);
  }

  deleteAppointment(appointmentId: number) {
    return this.http.delete(`${this.baseUrl}/${appointmentId}`);
  }
}
