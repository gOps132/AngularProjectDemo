import { Component, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})

@Directive({
  selector: 'delete-button',
})
export class DeleteButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("branch changed!!")
  }

}
