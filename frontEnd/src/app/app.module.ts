import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/pages/login/login.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, LoginComponent],
=======
import  {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from '@ngrx/effects';
import {UserProfileEffect} from '../app/auth/effects/user-profile.effect';
import{ userProfileReducer} from '../app/auth/reducers/user-profile.reducer';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
>>>>>>> 2cf63bc96f8aec01c5361a503b30439ab09cf599
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
=======
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('user', userProfileReducer),
      EffectsModule.forRoot([UserProfileEffect]),
>>>>>>> 2cf63bc96f8aec01c5361a503b30439ab09cf599
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
