import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { PetListComponent } from './pet-list/pet-list.component';
import { RegistListComponent } from './regist-list/regist-list.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'pets', component: PetListComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'regists', component: RegistListComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
