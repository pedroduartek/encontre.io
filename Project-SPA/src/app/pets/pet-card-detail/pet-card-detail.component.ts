import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/_models/pet';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-pet-card-detail',
  templateUrl: './pet-card-detail.component.html',
  styleUrls: ['./pet-card-detail.component.css']
})
export class PetCardDetailComponent implements OnInit {
  @Input() pet: Pet;

  constructor(public authService: AuthService) { }

  ngOnInit() {
        
  }

}
