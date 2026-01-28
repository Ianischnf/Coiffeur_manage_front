import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


//Interface envoie requete pour créer rdv
export interface AppointmentRequest {
    startAt: string;
    note: string;
    hairdresserId: number | null;
}

//interface ajouté dans interface RDV (appointment) pour récupérer le nom+prenom du client qui a créer le rdv
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

//Réponse du RDV
export interface Appointment {
    appointmentId: number;
    startAt: string;
    hairdresserId: number;
    hairdresser: string;
    note: string;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
    client: ClientSummary;
}


// Interface pour que le coiffeur gère ses RDV : 
// Reponse (du status modifié)
export interface AppointmentReponseStatus {
    appointmentId: number;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
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
    private baseUrlHairdresserAppointment = 'http://localhost:8083/hairdresser/appointments'

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
        return this.http.get<Appointment[]>(`${this.baseUrlHairdresserAppointment}`)
    }

    AcceptAppointment(appointmentId: number): Observable<AppointmentReponseStatus> {
        return this.http.patch<AppointmentReponseStatus>(
            `${this.baseUrlHairdresserAppointment}/${appointmentId}/accept`,
            null
        );
    }


}