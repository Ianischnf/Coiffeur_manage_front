import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface AppointmentRequest {
    startAt: string;
    note: string;
    hairdresserId: number | null;
}

export interface ClientSummary {
    id: number;
    firstName: string;
    lastName: string;
}

export interface HairdresserSummary {
    id: number;
    firstName?: string;
    lastName?: string;
}

export interface Appointment {
    appointmentId: number;
    startAt: string;
    hairdresserId: number;
    hairdresser: string;
    note: string;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
    client: ClientSummary;
}


export interface HairdresserSummary {
    id: number;
    // optionnel si tu veux l’afficher
    firstName?: string;
    lastName?: string;
}

@Injectable({ providedIn: "root" })
export class AppointmentService {

    //URL pour gerer les RDV côté clients
    private baseUrl = 'http://localhost:8083/client/appointment'

    //URL pour gerer les RDV côté coiffeur
    private baseUrlHairdresserAppointment = 'http://localhost:8083/hairdresser'

    constructor(private http: HttpClient) { }

    ///////////////////GESTION COTER CLIENT ///////////////////

    createAppointment(data: AppointmentRequest): Observable<Appointment> {
        return this.http.post<Appointment>(`${this.baseUrl}`, data);
    }

    //fetch RDV des clients
    fetchAllAppointment(): Observable<Appointment[]> {
        return this.http.get<Appointment[]>(`${this.baseUrl}`);
    }

    deleteAppointment(appointmentId: number) {
        return this.http.delete(`${this.baseUrl}/${appointmentId}`)
    }

    ///////////////////GESTION COTER COIFFEUR ///////////////////

    fetchAllAppointmentHairdresser(): Observable<Appointment[]> {
        return this.http.get<Appointment[]>(`${this.baseUrlHairdresserAppointment}/appointments`)
    }

}