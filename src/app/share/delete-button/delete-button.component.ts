import { 
  Component, 
  OnInit, 
  Directive, 
  Output, 
  EventEmitter 
} from '@angular/core';

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
    
  }

  preventSingleClick = false;
  timer: any;
  delay: Number;

  singleClick(event) {
    this.preventSingleClick = false;
     const delay = 200;
      this.timer = setTimeout(() => {
        if (!this.preventSingleClick) {
          console.log("single click")
        }
      }, delay);
  }

    doubleClick (event) {
      this.preventSingleClick = true;
      clearTimeout(this.timer);
      console.log("doubleclick")
    }
}
