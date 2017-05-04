import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarselfservice',
  templateUrl: './sidebarselfservice.component.html'
})
export class SidebarselfserviceComponent implements OnInit {

  isActive = false;
  showMenu = '';

  constructor() { }

  ngOnInit() {
  }

  eventCalled() {
      this.isActive = !this.isActive;
  }
  addExpandClass(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }
  }

}
