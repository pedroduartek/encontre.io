import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/_models/pet';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() pet: Pet;

  constructor() { }

  ngOnInit() {
  }

}
