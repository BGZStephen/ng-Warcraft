import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wow-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  navbarVisible = true;

  navbarToggleResize() {
    if (screen.width < 768) {
      this.navbarToggle("resize")
    }
  }

  navbarClose() {
    if (screen.width < 768) {
      console.log("Closing")
      this.navbarVisible = true;
      this.navbarToggle();
    }
  }

  navbarToggle(resize?) {
    if (resize && screen.width < 768) {
      return {'visibility':'hidden', 'opacity': '0'}
    } else if (this.navbarVisible == true && screen.width >= 768) {
      return {'visibility':'visible', 'opacity': '1'}
    } else if (this.navbarVisible == false) {
      return {'visibility':'visible', 'opacity': '1'}
    } else {
      return {'visibility':'hidden', 'opacity': '0'}
    }
  }

  ngOnInit() {
  }

}
