import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../services/api/wow-api.service"


@Component({
  selector: 'wow-realm-status',
  templateUrl: './realm-status.component.html',
  styleUrls: ['./realm-status.component.css'],
})
export class RealmStatusComponent implements OnInit {

  realmStatusResult = []
  currentRealm: string = "en_GB"

  setCurrentRealm(realmLocale) {
    this.currentRealm = realmLocale;
  }

  setActiveRealm(id) {
    let buttons = document.getElementsByClassName("locale-button")
    for(let i = 0; i < buttons.length; i++) {
      if(buttons[i].textContent == id) {
        buttons[i].classList.add("locale-button-active")
      } else {
        buttons[i].classList.remove("locale-button-active")
      }
    }
  }

  constructor(private apiService: WowApiService) {
    this.apiService.apiSearch("RealmStatus")
    .subscribe(res => {
      this.realmStatusResult = res.realms;
      console.log(this.realmStatusResult)
    })
  }

  ngOnInit() {
  }

}
