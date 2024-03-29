import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchnittService {

  constructor(private http: HttpClient) { }

  getSpielerData() {
    return this.http.get('https://niklasdeegapi.azurewebsites.net/SportwinnerData')
  }

  getUserData() {
    return this.http.get('https://localhost:7261/User/Users')
  }
}
