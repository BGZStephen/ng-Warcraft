import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsCarouselComponent } from './carousels/news-carousel/news-carousel.component';
import { WowApiService } from "./services/api/wow-api.service"
import { ApiRootComponent } from './pages/api/api-root/api-root.component';
import { ApiBossesComponent } from './pages/api/api-bosses/api-bosses.component';
import { ApiItemComponent } from './pages/api/api-item/api-item.component';
import { ApiQuestComponent } from './pages/api/api-quest/api-quest.component';
import { ApiRealmStatusComponent } from './pages/api/api-realm-status/api-realm-status.component';
import { ApiZonesComponent } from './pages/api/api-zones/api-zones.component';
import { ApiAchievementComponent } from './pages/api/api-achievement/api-achievement.component';
import { ApiAuctionComponent } from './pages/api/api-auction/api-auction.component';
import { ApiMountComponent } from './pages/api/api-mount/api-mount.component';
import { ApiPvpComponent } from './pages/api/api-pvp/api-pvp.component';
import { ApiSpellComponent } from './pages/api/api-spell/api-spell.component';
import { ApiPetComponent } from './pages/api/api-pet/api-pet.component';
import { RealmStatusComponent } from './realm-status/realm-status.component';
import { realmFilterPipe } from "./pipes/realm-filter-pipe"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewsCarouselComponent,
    ApiRootComponent,
    ApiBossesComponent,
    ApiItemComponent,
    ApiQuestComponent,
    ApiRealmStatusComponent,
    ApiZonesComponent,
    ApiAchievementComponent,
    ApiAuctionComponent,
    ApiMountComponent,
    ApiPvpComponent,
    ApiSpellComponent,
    ApiPetComponent,
    RealmStatusComponent,
    realmFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [WowApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
