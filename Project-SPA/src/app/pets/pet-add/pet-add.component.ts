import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { PetService } from 'src/app/_services/pet.service';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private alertify: AlertifyService,
     private router : Router, private petService: PetService) {}

  ngOnInit() {}

  addPet(){
    this.petService.addPet(this.model).subscribe(
      () => {
        this.alertify.success('Pet added');
        this.router.navigate(['/home']); //not working
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
