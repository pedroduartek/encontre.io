import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { PetFoundListComponent } from './pets/pet-foundlist/pet-foundlist.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetFoundListResolver } from './_resolvers/pet-foundlist.resolver';
import { PetDetailResolver } from './_resolvers/pet-detail.resolver';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserPetsResolver } from './_resolvers/user-pets.resolver';
import { UserPetsComponent } from './user/user-pets/user-pets.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './_guards/PreventUnsavedChanges.guard';
import { PetRegistComponent } from './pets/pet-regist/pet-regist.component';
import { PetEditResolver } from './_resolvers/pet-edit.resolver';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { PetLostlistComponent } from './pets/pet-lostlist/pet-lostlist.component';
import { PetLostListResolver } from './_resolvers/pet-lostlist.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'pets/foundlist', component: PetFoundListComponent,
        resolve: { pets: PetFoundListResolver }
      },
      {
        path: 'pets/lostlist', component: PetLostlistComponent,
        resolve: { pets: PetLostListResolver }
      },
      {
        path: 'pets/:id', component: PetDetailComponent,
        resolve: { pet: PetDetailResolver }
      },
      {
        path: 'pets/edit/:id', component: PetEditComponent,
        resolve: { pet: PetEditResolver }, canDeactivate: [PreventUnsavedChanges]
      },
      { path: 'messages', component: MessagesComponent },
      { path: 'pets/regist', component: PetRegistComponent },
      {
        path: 'users/pets/:id', component: UserPetsComponent,
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
