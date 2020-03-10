import { User } from './user.model';
import { User as User1} from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
}
from '@angular/fire/firestore';

import { Observable, of, ObjectUnsubscribedError } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { Item } from './item-model';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user$: Observable<User>;
  currentUser$: Observable<User1 | null>;

  constructor(
    private firebase: FirebaseApp ,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.currentUser$ = this.afAuth.authState;
  
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        } else {  
          return of(null);
        }
      })
    );
  
   }
    
  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    let credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData({ uid, email, displayName, photoURL }: User) {
    //sets user data to firestore login
    const userRef: AngularFirestoreDocument<User> =  this.afs.doc(`user/${uid}`);
      const data = {
        uid, 
        email,
        displayName,
        photoURL,
      };
    return userRef.set(data, { merge: true });
  }
}
