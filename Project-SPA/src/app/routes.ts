import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetListResolver } from './_resolvers/pet-list.resolver';
import { PetDetailResolver } from './_resolvers/pet-detail.resolver';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserPetsResolver } from './_resolvers/user-pets.resolver';
import { UserPetsComponent } from './user/user-pets/user-pets.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './_guards/PreventUnsavedChanges.guard';
import { PetRegistComponent } from './pets/pet-regist/pet-regist.component';

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
      { path: 'pets/regist', component: PetRegistComponent },
      {
        path: 'user/pets/:id', component: UserPetsComponent,
        resolve: { pets: UserPetsResolver }
      },
      {
        path: 'users/:id', component: UserDetailComponent,
        resolve: { user: UserDetailResolver }
      },
      {
        path: 'user/edit', component: UserEditComponent,
        resolve: { user: UserEditResolver }, canDeactivate: [PreventUnsavedChanges]
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
