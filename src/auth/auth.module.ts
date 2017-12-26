import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

// shared modules
import { SharedModule } from "./shared/shared.module";

export const ROUTES: Routes = [
  {
    path: "auth",
    children: [
      { path: "", pathMatch: "full", redirectTo: "login" },
      { path: "login", loadChildren: "./login/login.module#LoginModule" },
      { path: "register", loadChildren: "./register/register.module#RegisterModule" }
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBeA7J7KY1gTYjrvbKZO88ItH_DrgvE7go",
  authDomain: "fitness-app-12185.firebaseapp.com",
  databaseURL: "https://fitness-app-12185.firebaseio.com",
  projectId: "fitness-app-12185",
  storageBucket: "fitness-app-12185.appspot.com",
  messagingSenderId: "991161748807"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
