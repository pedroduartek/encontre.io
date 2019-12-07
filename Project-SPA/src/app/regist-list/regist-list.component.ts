import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../_models/pet';


@Component({
  selector: 'app-regist-list',
  templateUrl: './regist-list.component.html',
  styleUrls: ['./regist-list.component.css']
})
export class RegistListComponent implements OnInit {
  pets: Pet[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.pets = data['pets'];
    })
  }

}
