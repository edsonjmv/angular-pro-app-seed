import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*

var config = {
    apiKey: "AIzaSyBeA7J7KY1gTYjrvbKZO88ItH_DrgvE7go",
    authDomain: "fitness-app-12185.firebaseapp.com",
    databaseURL: "https://fitness-app-12185.firebaseio.com",
    projectId: "fitness-app-12185",
    storageBucket: "fitness-app-12185.appspot.com",
    messagingSenderId: "991161748807"
  };

*/
