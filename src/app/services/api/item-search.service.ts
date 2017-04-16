import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class ItemSearchService {

  constructor(private http: Http) {}

  apiKey: string = "ny7cn7mpvjztbehsqemdwdy4xbz2tn7s"

  getItem(id) {
    let requestUrl = "https://eu.api.battle.net/wow/item/"+id+"?locale=en_GB&apikey="+this.apiKey
    return this.http.get(requestUrl)
    .map(res => res.json())
  }

}
