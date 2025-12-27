import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface AppointmentRequest {
    startAt: string;
    note: string;
    hairdresserId: number | null;
}

export interface Appointment {
    appointmentId: number;
    startAt: string;
    hairdresserId: number;
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