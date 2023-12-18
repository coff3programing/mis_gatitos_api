import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class CatService {
    private http;
    private apiUrl;
    constructor(http: HttpClient);
    getCats(): Observable<any[]>;
}
