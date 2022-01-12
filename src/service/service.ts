import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JsonService {
  constructor(private httpClient: HttpClient) {
  }

  getCustomInput() {
    return this.httpClient.get("./assets/metadata.json");
  }

  getFormData() {
    return this.httpClient.get("./assets/formdata.json");
  }

  patchFormData(){
    return this.httpClient.patch("./assets/formdata.json",{firstName:"Alejandro"});
  }
}
