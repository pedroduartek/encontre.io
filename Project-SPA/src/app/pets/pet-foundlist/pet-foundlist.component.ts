import { Component, OnInit } from '@angular/core';
import { Pet } from '../../_models/pet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-foundlist.component.html',
  styleUrls: ['./pet-foundlist.component.css']
})
export class PetFoundListComponent implements OnInit {
  pets: Pet[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.pets = data['pets'];
    })
  }
}

