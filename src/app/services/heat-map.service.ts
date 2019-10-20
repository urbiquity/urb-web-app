import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HeatMapService {
    constructor(private http: HttpClient) {
    }

    getData() {
        let items = getMockEvents();
        return of(items).pipe(delay(500));
    }
}

function getMockEvents() {
    return [

      
    ];
}