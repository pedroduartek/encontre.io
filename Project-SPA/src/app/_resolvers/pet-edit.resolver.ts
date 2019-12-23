import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { Pet } from '../_models/pet';
import { PetService } from '../_services/pet.service';

@Injectable()
export class PetEditResolver implements Resolve<Pet> {
    constructor(private petService: PetService, private alertify: AlertifyService, private authService: AuthService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Pet> {
        if(false){ //check if user is equal to pet.user
            this.alertify.error('Unauthorized');
            this.router.navigate(['/pets']);
        }

        return this.petService.getPet(route.params['id']).pipe(
            catchError(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return of(null);
            })
        );
    }
}
