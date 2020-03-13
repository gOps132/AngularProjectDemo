import { AuthService } from './../../service/auth.service';
import { ItemServiceService } from './../../service/item-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcomp',
  templateUrl: './listcomp.component.html',
  styleUrls: ['./listcomp.component.scss']
})
export class ListcompComponent implements OnInit {
  firstPanelOpenState: Boolean = false;
  secondPanelOpenState: Boolean = false;

  currentUserId: String;

  constructor(
    public igf: ItemServiceService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.currentUser$.subscribe(user => {
      this.currentUserId =  user.uid;
    })
  }
  onDelete(itemId: string){
    this.igf.onDelete(itemId);
  }
}
