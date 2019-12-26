import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-user-card-detail',
  templateUrl: './user-card-detail.component.html',
  styleUrls: ['./user-card-detail.component.css']
})
export class UserCardDetailComponent implements OnInit {
  @Input() user: User;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
