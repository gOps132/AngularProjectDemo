import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "AngularProjectDemo";
  isChecked = true;

  onChange($event) {
    console.log($event);
  }

  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection("/items").valueChanges();
  }
}
