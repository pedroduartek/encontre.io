import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';

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
import { PetFoundListComponent } from './pets/pet-foundlist/pet-foundlist.component';
import { PetCardComponent } from './pets/pet-card/pet-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetFoundListResolver } from './_resolvers/pet-foundlist.resolver';
import { PetDetailResolver } from './_resolvers/pet-detail.resolver';
import { AuthGuard } from './_guards/auth.guard';
import { PetService } from './_services/pet.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserService } from './_services/user.service';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserPetsResolver } from './_resolvers/user-pets.resolver';
import { UserDeactivatedPetsResolver } from './_resolvers/user-deactivated-pets.resolver';
import { UserPetsComponent } from './user/user-pets/user-pets.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { PreventUnsavedChanges } from './_guards/PreventUnsavedChanges.guard';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { PetEditResolver } from './_resolvers/pet-edit.resolver';
import { PetLostListResolver } from './_resolvers/pet-lostlist.resolver';
import { PetLostlistComponent } from './pets/pet-lostlist/pet-lostlist.component';
import { PetCardDetailComponent } from './pets/pet-card-detail/pet-card-detail.component';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import { UserCardDetailComponent } from './user/user-card-detail/user-card-detail.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';

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
      PetFoundListComponent,
      PetCardComponent,
      PetDetailComponent,
      UserDetailComponent,
      UserPetsComponent,
      UserEditComponent,
      PetEditComponent,
      PetLostlistComponent,
      PetCardDetailComponent,
      PetAddComponent,
      UserCardDetailComponent,
      PhotoEditorComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot(),
      NgxGalleryModule,
      FileUploadModule,
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
      PetFoundListResolver,
      PetLostListResolver,
      AuthGuard,
      PreventUnsavedChanges,
      PetDetailResolver,
      UserPetsResolver,
      UserDetailResolver,
      PetService,
      UserEditResolver,
      UserService,
      PetEditResolver,
      UserDeactivatedPetsResolver,
      { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
