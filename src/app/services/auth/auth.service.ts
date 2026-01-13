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
    private readonly TOKEN_KEY = 'token';

    constructor(private http: HttpClient) { }

    
    // enregistre le token 
    setToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    //lit le token
    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    isLoggedIn(): boolean {
        const token = !!this.getToken();
        return token;
    }

    register(data: RegisterRequest): Observable<any> {
        return this.http.post(`${this.baseUrl}/register`, data);
    }

    //récupération du token et connexion client
    loginClient(data: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.baseUrl}/client/login`, data);
    }

    //récupération du token et connexion coiffeur
    loginHairDresser(data: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.baseUrl}/hairdresser/login`, data);
    }

    getRole(): 'CLIENT' | 'HAIRDRESSER' | null {
        const token = this.getToken();
        if (!token) return null;

        try {
            /* créer un tableau de 3 éléménts, on prend le premier (payload), 
                on décole la base 64 en JSON du JWT avec atob et si role existe pas -> null */
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.role ?? null;
        } catch {
            return null;
        }
    }


}