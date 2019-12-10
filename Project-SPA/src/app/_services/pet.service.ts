import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../_models/pet';



@Injectable({
  providedIn: 'root'
})
export class PetService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl + 'pets');
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.baseUrl + 'pets/' + id);
  }

  getUsersPets(id: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl + 'userpets/' + id);
  }

}
