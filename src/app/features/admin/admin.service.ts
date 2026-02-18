import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hairdresser } from "./dto/hairdresser.dto";

@Injectable({ providedIn: 'root' })
export class AdminService {
    
    private baseUrl = 'http://localhost:8083/hairdresser';

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.fetchAllHairdresser();
    }

    fetchAllHairdresser(): Observable<Hairdresser[]> {
        return this.http.get<Hairdresser[]>(this.baseUrl);
    } 
}