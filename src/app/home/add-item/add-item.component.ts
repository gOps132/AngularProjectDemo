import { AuthService } from './../../service/auth.service';
import { ItemServiceService } from './../../service/item-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  currentUserId: String;

  constructor(
    public igf: ItemServiceService,
    private auth: AuthService
  ) {
    this.auth.currentUser$.subscribe(user => {
      this.currentUserId =  user.uid;
    })
   }

  ngOnInit() {
  }

  onSubmit(itemTitle: string, itemDescription: string, ) {
    this.igf.onSubmit(itemTitle, itemDescription);
  }

}
