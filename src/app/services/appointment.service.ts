import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface AppointmentRequest {
    startAt: string;
    durationMinutes: number,
    hairdresser: string;
    note: string;
}

export interface Appointment {
    appointmentId: number;
    startAt: string;
    endAt: string;
    hairdresser: string;
    note: string;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}


@Injectable({ providedIn: "root" })
export class AppointmentService {

    private baseUrl = 'http://localhost:8083/appointment'

    constructor(private http: HttpClient) { }

    createAppointment(data: AppointmentRequest): Observable<Appointment> {
        return this.http.post<Appointment>(`${this.baseUrl}`, data);
    }


    fetchAllAppointment(): Observable<Appointment[]> {
        return this.http.get<Appointment[]>(`${this.baseUrl}`);
    }

    deleteAppointment(appointmentId : number){
        return this.http.delete(`${this.baseUrl}/${appointmentId}`)
    }

}