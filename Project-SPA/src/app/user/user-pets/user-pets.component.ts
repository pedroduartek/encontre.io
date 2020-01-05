import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/_models/pet';

@Component({
  selector: 'app-user-pets',
  templateUrl: './user-pets.component.html',
  styleUrls: ['./user-pets.component.css']
})
export class UserPetsComponent implements OnInit {
  activatedPets: Pet[];
  deactivatedPets: Pet[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.activatedPets = data['activetedPets'],
      this.deactivatedPets = data['deactivetedPets']
    })
  }

}
