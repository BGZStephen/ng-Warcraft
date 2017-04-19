import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../services/api/wow-api.service"

@Component({
  selector: 'wow-pvp-leaderboard',
  templateUrl: './pvp-leaderboard.component.html',
  styleUrls: ['./pvp-leaderboard.component.css']
})
export class PvpLeaderboardComponent implements OnInit {

  pvpResults = []

  races = {
    "1": {name: "Human", icon: "assets/ng-warcraft/images/icons/human/m.png"},
    "2": {name: "Orc", icon: "assets/ng-warcraft/images/icons/orc/m.png"},
    "3": {name: "Dwarf", icon: "assets/ng-warcraft/images/icons/dwarf/m.png"},
    "4": {name: "Night Elf", icon: "assets/ng-warcraft/images/icons/night-elf/m.png"},
    "5": {name: "Undead", icon: "assets/ng-warcraft/images/icons/undead/m.png"},
    "6": {name: "Tauren", icon: "assets/ng-warcraft/images/icons/tauren/m.png"},
    "7": {name: "Gnome", icon: "assets/ng-warcraft/images/icons/gnome/m.png"},
    "8": {name: "Troll", icon: "assets/ng-warcraft/images/icons/troll/m.png"},
    "9": {name: "Goblin", icon: "assets/ng-warcraft/images/icons/goblin/m.png"},
    "10": {name: "Blood Elf", icon: "assets/ng-warcraft/images/icons/blood-elf/m.png"},
    "11": {name: "Draenei", icon: "assets/ng-warcraft/images/icons/draenei/m.png"},
    "22": {name: "Worgen", icon: "assets/ng-warcraft/images/icons/worgen/m.png"},
    "25": {name: "Pandaren", icon: "assets/ng-warcraft/images/icons/pandaren/m.gif"}
  }

  factions = {
    "0": {name: "Alliance", icon: "assets/ng-warcraft/images/icons/alliance.png"},
    "1": {name: "Horde", icon: "assets/ng-warcraft/images/icons/horde.png"}
  }

  classes = {
    "1": {name: "Warrior", icon: "assets/ng-warcraft/images/icons/warrior/Warrior.png"},
    "2":	{name: "Paladin", icon: "assets/ng-warcraft/images/icons/paladin/Paladin.png"},
    "3":	{name: "Hunter", icon: "assets/ng-warcraft/images/icons/hunter/Hunter.png"},
    "4":	{name: "Rogue", icon: "assets/ng-warcraft/images/icons/rogue/Rogue.png"},
    "5":	{name: "Priest", icon: "assets/ng-warcraft/images/icons/priest/Priest.png"},
    "6":	{name: "Death Knight", icon: "assets/ng-warcraft/images/icons/deathknight/DK.png"},
    "7":	{name: "Shaman", icon: "assets/ng-warcraft/images/icons/shaman/Shaman.png"},
    "8":	{name: "Mage", icon: "assets/ng-warcraft/images/icons/mage/Mage.png"},
    "9":	{name: "Warlock", icon: "assets/ng-warcraft/images/icons/warlock/Warlock.png"},
    "10":	{name: "Monk", icon: "assets/ng-warcraft/images/icons/monk/Monk.png"},
    "11":	{name: "Druid", icon: "assets/ng-warcraft/images/icons/druid/Druid.png"},
    "12":	{name: "Demon Hunter", icon: "assets/ng-warcraft/images/icons/demonhunter/DH.png"}
  }

  specs = {
    "250": {name: "Blood", icon: "assets/ng-warcraft/images/icons/deathknight/blood.png"},
    "251": {name: "Frost", icon: "assets/ng-warcraft/images/icons/deathknight/frost.png"},
    "252": {name: "Unholy", icon: "assets/ng-warcraft/images/icons/deathknight/unholy.png"},
    "577": {name: "Havoc", icon: "assets/ng-warcraft/images/icons/demonhunter/havoc.jpg"},
    "581": {name: "Vengeance", icon: "assets/ng-warcraft/images/icons/demonhunter/vengeance.jpg"},
    "102": {name: "Balance", icon: "assets/ng-warcraft/images/icons/druid/balance.png"},
    "103": {name: "Feral Combat", icon: "assets/ng-warcraft/images/icons/druid/feral.png"},
    "105": {name: "Restoration", icon: "assets/ng-warcraft/images/icons/druid/restoration.png"},
    "253": {name: "Beast Mastery", icon: "assets/ng-warcraft/images/icons/hunter/beastmastery.png"},
    "254": {name: "Marksmanship", icon: "assets/ng-warcraft/images/icons/hunter/marksman.png"},
    "255": {name: "Survival", icon: "assets/ng-warcraft/images/icons/hunter/survival.png"},
    "62": {name: "Arcane", icon: "assets/ng-warcraft/images/icons/mage/arcane.png"},
    "63": {name: "Fire", icon: "assets/ng-warcraft/images/icons/mage/fire.png"},
    "64": {name: "Frost", icon: "assets/ng-warcraft/images/icons/mage/frost.png"},
    "268": {name: "Brewmaster", icon: "assets/ng-warcraft/images/icons/monk/brewmaster.png"},
    "269": {name: "Windwalker", icon: "assets/ng-warcraft/images/icons/monk/windwalker.png"},
    "270": {name: "Mistweaver", icon: "assets/ng-warcraft/images/icons/monk/mistweaver.png"},
    "65": {name: "Holy", icon: "assets/ng-warcraft/images/icons/paladin/holy.png"},
    "66": {name: "Protection", icon: "assets/ng-warcraft/images/icons/paladin/protection.png"},
    "70": {name: "Retribution", icon: "assets/ng-warcraft/images/icons/paladin/retribution.png"},
    "256": {name: "Discipline", icon: "assets/ng-warcraft/images/icons/priest/discipline.png"},
    "257": {name: "Holy", icon: "assets/ng-warcraft/images/icons/priest/holy.png"},
    "258": {name: "Shadow", icon: "assets/ng-warcraft/images/icons/priest/shadow.png"},
    "259": {name: "Assassination", icon: "assets/ng-warcraft/images/icons/rogue/assassination.png"},
    "260": {name: "Outlaw", icon: "assets/ng-warcraft/images/icons/rogue/outlaw.png"},
    "261": {name: "Subtlety", icon: "assets/ng-warcraft/images/icons/rogue/subtelty.png"},
    "262": {name: "Elemental", icon: "assets/ng-warcraft/images/icons/shaman/elemental.png"},
    "263": {name: "Enhancement", icon: "assets/ng-warcraft/images/icons/shaman/enhancement.png"},
    "264": {name: "Restoration", icon: "assets/ng-warcraft/images/icons/shaman/restoration.png"},
    "265": {name: "Affliction", icon: "assets/ng-warcraft/images/icons/warlock/afflication.png"},
    "266": {name: "Demonology", icon: "assets/ng-warcraft/images/icons/warlock/demonology.png"},
    "267": {name: "Destruction", icon: "assets/ng-warcraft/images/icons/warlock/destruction.png"},
    "71": {name: "Arms", icon: "assets/ng-warcraft/images/icons/warrior/arms.png"},
    "72": {name: "Fury", icon: "assets/ng-warcraft/images/icons/warrior/fury.png"},
    "73": {name: "Protection", icon: "assets/ng-warcraft/images/icons/warrior/protection.png"}
  }

  clearResults() {
    this.pvpResults = null
  }

  getSpec(id) {
    return this.specs[id].name
  }

  getSpecIcon(id) {
    return this.specs[id].icon
  }

  getClass(id) {
    return this.classes[id].name
  }

  getClassIcon(id) {
    return this.classes[id].icon
  }

  getFaction(id) {
    return this.factions[id].name
  }

  getFactionIcon(id) {
    return this.factions[id].icon
  }

  getRace(id) {
    return this.races[id].name
  }

  getRaceIcon(id) {
    return this.races[id].icon
  }

  constructor(private apiService: WowApiService) {
    this.getPvpResults("2v2")
  }

  getPvpResults(bracket) {
    this.clearResults()
    this.apiService.apiSearch("PVP", bracket)
    .subscribe(res => {
      this.pvpResults = res.rows
      console.log(this.pvpResults)
    })
  }

  ngOnInit() {
  }

}
