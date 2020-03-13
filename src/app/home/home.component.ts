import { ItemServiceService } from './../service/item-service.service';
import {
  AngularFirestore,
} from "@angular/fire/firestore";
import { Component } from "@angular/core";
import { AuthService } from "../service/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html", 
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent {
  currentUserId: String;
  
  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    public igf: ItemServiceService
    ) {
      this.auth.currentUser$.subscribe(user => {
        this.currentUserId =  user.uid;
      })
    }

  onSubmit(itemTitle: string, itemDescription: string, ) {
    this.igf.onSubmit(itemTitle, itemDescription);
  }
}

