import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class WowApiService {

  constructor(private http: Http) {}

  baseUrl = "https://eu.api.battle.net/wow/"
  apiKey = "ny7cn7mpvjztbehsqemdwdy4xbz2tn7s"
  apiUrls = {
    Achievement: "achievement/",
    Auction: "auction/data/",
    Boss: "boss/",
    Item: "item/",
    ItemSet: "item/set/",
    Mount: "mount/",
    Pet: "pet/",
    PetAbility: "pet/ability/",
    PetSpecies: "pet/species/",
    PetStats: "pet/stats/",
    PVP: "leaderboard/",
    Recipe: "recipe/",
    Spell: "spell/",
    Quest: "quest/",
    RealmStatus: "realm/status",
    Zone: "zone/"
  }

  apiSearch(api, id = "") {
    let requestUrl = this.baseUrl + this.apiUrls[api] + id + "?locale=en_GB&apikey=" + this.apiKey
    return this.http.get(requestUrl)
    .map(res => res.json())
  }

}
