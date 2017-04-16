import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class ApiSearchService {

  apiKey = "ny7cn7mpvjztbehsqemdwdy4xbz2tn7s"

  constructor(private http: Http) {}

  getBosses() {
    let requestUrl = "https://eu.api.battle.net/wow/boss/?locale=en_GB&apikey="+this.apiKey
    return this.http.get(requestUrl)
    .map(res => res.json())
  }

  getBoss(id) {
    console.log("ID", id)
    let requestUrl = "https://eu.api.battle.net/wow/boss/"+id+"?locale=en_GB&apikey="+this.apiKey
    return this.http.get(requestUrl)
    .map(res => res.json())
  }

  getZones() {
    let requestUrl = "https://eu.api.battle.net/wow/zone/?locale=en_GB&apikey="+this.apiKey
    return this.http.get(requestUrl)
    .map(res => res.json())
  }

  getQuests() {
    let requestUrl = "https://eu.api.battle.net/wow/quest/13146?locale=en_GB&apikey="+this.apiKey
    return this.http.get(requestUrl)
    .map(res => res.json())
  }


}
