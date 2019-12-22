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

  getPets(id: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl + 'pets/petslist/'+ id);
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.baseUrl + 'pets/' + id);
  }

  getUsersPets(id: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl + 'userpets/' + id);
  }

  updatePet(id: number, pet: Pet) {
    return this.http.put(this.baseUrl + 'pets/' + id, pet);
  }

}
