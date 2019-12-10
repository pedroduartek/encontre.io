import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_services/auth.service';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorIntercepetorProvider } from './_services/error.interceptor';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetCardComponent } from './pets/pet-card/pet-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetListResolver } from './_resolvers/pet-list.resolver';
import { PetDetailResolver } from './_resolvers/pet-detail.resolver';
import { AuthGuard } from './_guards/auth.guard';
import { PetService } from './_services/pet.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserService } from './_services/user.service';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserPetsResolver } from './_resolvers/user-pets.resolver';
import { UserPetsComponent } from './user/user-pets/user-pets.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { PreventUnsavedChanges } from './_guards/PreventUnsavedChanges.guard';

export function getToken() {
   return localStorage.getItem('token');
}

//bug fix for ngx-gallery with angular 8
export class CustomHammerConfig extends HammerGestureConfig {
   overrides = {
      pinch: { enable: false },
      rotate: { enable: false }
   };
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent,
      MessagesComponent,
      PetListComponent,
      PetCardComponent,
      PetDetailComponent,
      UserDetailComponent,
      UserPetsComponent,
      UserEditComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot(),
      NgxGalleryModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: getToken,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         },
      })
   ],
   providers: [
      AuthService,
      ErrorIntercepetorProvider,
      PetListResolver,
      AuthGuard,
      PreventUnsavedChanges,
      PetDetailResolver,
      UserPetsResolver,
      UserDetailResolver,
      PetService,
      UserEditResolver,
      UserService,
      { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
