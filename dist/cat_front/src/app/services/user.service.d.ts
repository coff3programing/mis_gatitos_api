import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class UserService {
    private http;
    private apiUrl;
    private token;
    constructor(http: HttpClient);
    login(email: string, password: string): Observable<any>;
    setToken(token: string): void;
    getToken(): string;
    getAuthenticatedData(): Observable<any>;
    sendResetEmail(email: string): Observable<any>;
    resetPassword(token: string, newPassword: string): Observable<void>;
    private apiUrl1;
    createUser(user: any): Observable<any>;
}
