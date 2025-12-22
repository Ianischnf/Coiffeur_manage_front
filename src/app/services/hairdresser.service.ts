import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface HairDresserRequest{
    lastName: string;
    firstName: string;
}

export interface HairDresserResponse {
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

}