import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class RealmStatusSearchService {

  constructor(private http: Http) {}

  apiKey: string = "ny7cn7mpvjztbehsqemdwdy4xbz2tn7s"

  getRealmStatus() {
    let requestUrl = "https://eu.api.battle.net/wow/realm/status?locale=en_GB&apikey="+this.apiKey
    return this.http.get(requestUrl)
    .map(res => res.json())
  }

}
