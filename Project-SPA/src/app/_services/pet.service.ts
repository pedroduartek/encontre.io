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

  getFoundPets(id: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl + 'pets/found/' + id);
  }

  getLostPets(id: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl + 'pets/lost/' + id);
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.baseUrl + 'pets/' + id);
  }

  getUsersPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl + 'users/pets/');
  }

  updatePet(id: number, pet: Pet) {
    return this.http.put(this.baseUrl + 'pets/update/' + id, pet);
  }
  addPet(model: any) {
    return this.http.post(this.baseUrl + 'pets/add', model);
  }

}
