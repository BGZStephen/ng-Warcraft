import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-pvp',
  templateUrl: './api-pvp.component.html',
  styleUrls: ['./api-pvp.component.css', '../shared/shared.css']
})
export class ApiPvpComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  races = {
    1: "Human",
    2: "Orc",
    3: "Dwarf",
    4: "Night Elf",
    5: "Undead",
    6: "Tauren",
    7: "Gnome",
    8: "Troll",
    9: "Goblin",
    10: "Blood Elf",
    11: "Draenei",
    22: "Worgen",
    25: "Pandaren"
  }

  factions = {
    0: "Alliance",
    1: "Horde",
  }

  classes = {
    1: "Warrior",
    2:	"Paladin",
    3:	"Hunter",
    4:	"Rogue",
    5:	"Priest",
    6:	"Death Knight",
    7:	"Shaman",
    8:	"Mage",
    9:	"Warlock",
    10:	"Monk",
    11:	"Druid",
    12:	"Demon Hunter"
  }

  specs = {
    250: "Blood",
    251: "Frost",
    252: "Unholy",
    577: "Havoc",
    581: "Vengeance",
    102: "Balance",
    103: "Feral Combat",
    105: "Restoration",
    253: "Beast Mastery",
    254: "Marksmanship",
    255: "Survival",
    62: "Arcane",
    63: "Fire",
    64: "Frost",
    268: "Brewmaster",
    269: "Windwalker",
    270: "Mistweaver",
    65: "Holy",
    66: "Protection",
    70: "Retribution",
    256: "Discipline",
    257: "Holy",
    258: "Shadow",
    259: "Assassination",
    260: "Outlaw",
    261: "Subtlety",
    262: "Elemental",
    263: "Enhancement",
    264: "Restoration",
    265: "Affliction",
    266: "Demonology",
    267: "Destruction",
    71: "Arms",
    72: "Fury",
    73: "Protection"
  }

  pvpResults: object;

  clearResults() {
    this.pvpResults = null
  }

  getSpec(id) {
    return this.specs[id]
  }

  getClass(id) {
    return this.classes[id]
  }

  getFaction(id) {
    return this.factions[id]
  }

  getRace(id) {
    return this.races[id]
  }

  searchPvp(id) {
    this.clearResults()
    this.apiService.apiSearch("PVP", id)
    .subscribe(res => {
      this.pvpResults = res
      console.log(this.pvpResults)
    })
  }

  ngOnInit() {
  }

}
