import { AuthService } from './../../service/auth.service';
import { ItemServiceService } from './../../service/item-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcomp',
  templateUrl: './listcomp.component.html',
  styleUrls: ['./listcomp.component.scss']
})
export class ListcompComponent implements OnInit {

  currentUserId: String;
  firstPanelOpenState: Boolean = false;
  secondPanelOpenState: Boolean = false;

  constructor(
    public igf: ItemServiceService,
    private auth: AuthService
  ) { }

  ngOnInit() {  }

}
