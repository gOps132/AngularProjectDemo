import { environment } from "./../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Angular material
import { MatMenuModule } from "@angular/material/menu";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSelectModule } from "@angular/material/select";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


//Components
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";

// Firebase modules
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DeleteButtonComponent } from './share/delete-button/delete-button.component';
import { ListcompComponent } from './home/listcomp/listcomp.component';
import { AddItemComponent } from './home/add-item/add-item.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, UserDashboardComponent, DeleteButtonComponent, ListcompComponent, AddItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Angular material  
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatIconModule,

    //Angular Fire
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
