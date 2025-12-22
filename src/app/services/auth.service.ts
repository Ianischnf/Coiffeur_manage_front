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

export interface LoginResponse {
    token: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {

    private baseUrl = 'http://localhost:8083/auth';

    constructor(private http: HttpClient) { }

    register(data: RegisterRequest): Observable<any> {
        return this.http.post(`${this.baseUrl}/register`, data);
    }

    //récupération du token
    login(data: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.baseUrl}/login`, data);
    }


}