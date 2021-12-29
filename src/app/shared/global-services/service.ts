import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    constructor(private http: HttpClient) { }

    getCountriesList() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
        return this.http.get('assets/jsons/countryCities.json', { headers });
    }
}