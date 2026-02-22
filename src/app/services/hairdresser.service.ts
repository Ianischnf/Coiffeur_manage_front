import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface HairDresserRequest{
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
}

export interface HairDresserResponse {
    id: number;
    LastName: string;
    FirstName: string;
}



@Injectable({ providedIn : "root"})
export class hairdresserService{

    private baseUrl = "http://localhost:8083/hairdresser";

    constructor(private http : HttpClient) {}

    addHairdresser(data : HairDresserRequest): Observable<any> {
        return this.http.post(`${this.baseUrl}`, data);
    }

    fetchHairDresserList(): Observable<HairDresserResponse[]> {
        return this.http.get<HairDresserResponse[]>(`${this.baseUrl}`);
    }

    fetchHairDresserById(hairDresserId : number): Observable<HairDresserResponse> {
        return this.http.get<HairDresserResponse>(`${this.baseUrl}/${hairDresserId}`);
    }

}