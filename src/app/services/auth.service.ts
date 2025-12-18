import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"


export interface RegisterRequest {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email : string;
    password: string;
}

@Injectable({providedIn: "root"})
export class AuthService{

    private baseUrl = 'http://localhost:8083/auth';

    constructor(private http: HttpClient) {}

    register(data : RegisterRequest): Observable<any> {
        return this.http.post(`${this.baseUrl}/register`, data);
    }

    login(data : LoginRequest) : Observable<any> {
        return this.http.post(`${this.baseUrl}/login`, data);
    }

}