import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/_models/pet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-lostlist',
  templateUrl: './pet-lostlist.component.html',
  styleUrls: ['./pet-lostlist.component.css']
})
export class PetLostlistComponent implements OnInit {
  pets: Pet[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.pets = data['pets'];
    })
  }
}
