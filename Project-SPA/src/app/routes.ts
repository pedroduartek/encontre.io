import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { RegistListComponent } from './regist-list/regist-list.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetListResolver } from './_resolvers/pet-list.resolver';
import { PetDetailResolver } from './_resolvers/pet-detail.resolver';
import { UsersPetsResolver } from './_resolvers/users-pets.resolver';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'pets', component: PetListComponent,
        resolve: { pets: PetListResolver }
      },
      {
        path: 'pets/:id', component: PetDetailComponent,
        resolve: { pet: PetDetailResolver }
      },
      { path: 'messages', component: MessagesComponent },
      {
        path: 'regists/:id', component: RegistListComponent,
        resolve: { pets: UsersPetsResolver }
      },
      {
        path: 'users/:id', component: UserDetailComponent,
        resolve: { user: UserDetailResolver }
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
