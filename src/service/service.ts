import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class JsonService {
    data: any;
    constructor(private httpClient: HttpClient){
    }

    getData(){
        
        return this.httpClient.get("./assets/metadata.json");
    }
}