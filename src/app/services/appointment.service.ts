import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface AppointmentRequest {
    startAt: string;
    endAt: string;
    note: string;
}

export interface Appointment {
    id: number;
    startAt: string;
    endAt: string;
    note: string;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}


@Injectable({ providedIn: "root" })
export class AppointmentService {

    private baseUrl = 'http://localhost:8083/appointment'

    constructor(private http: HttpClient) { }

    createAppointment(data: AppointmentRequest): Observable<Appointment> {
        return this.http.post<Appointment>(`${this.baseUrl}/appointment`, data);
    }


    fetchAllAppointment(): Observable<Appointment[]> {
        return this.http.get<Appointment[]>(`${this.baseUrl}/appointment`);
    }
}