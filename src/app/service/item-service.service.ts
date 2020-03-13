import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Item } from './item-model';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  items: Observable<Item[]>;
  userDoc: any;
  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    private afAuth: AngularFireAuth,
  ) {
    this.auth.currentUser$.subscribe( user => {
      this.userDoc = afs.doc<Item>(`user/${user.uid}`);
      this.items = this.userDoc.collection('items').valueChanges({ idField: 'id'});
      this.itemsCollection = this.userDoc.collection('items');
    })
   }

   onSubmit(itemTitle: string, itemDescription: string, ) {
     // Persist a document id
    const id = this.afs.createId();
    this.itemsCollection.doc(id).set({ title: itemTitle, description: itemDescription });
    // this.itemsCollection.add({ title: itemTitle, description: itemDescription});
  }

  onDelete(itemId: string) {
    this.itemsCollection.doc(itemId).delete();
  }
}

