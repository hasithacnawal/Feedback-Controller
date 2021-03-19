import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserProfileEffect } from '../app/auth/effects/user-profile.effect';
import { userProfileReducer } from '../app/auth/reducers/user-profile.reducer';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { NavigationBarComponent } from './views/partials/navigation-bar/navigation-bar.component';
import { SideBarComponent } from './views/partials/side-bar/side-bar.component';
import { FooterComponent } from './views/partials/footer/footer.component';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, NavigationBarComponent, SideBarComponent, FooterComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreDevtoolsModule.instrument(),

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('user', userProfileReducer),
    EffectsModule.forRoot([UserProfileEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
