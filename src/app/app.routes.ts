import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ApiRootComponent, ApiAchievementComponent, ApiAuctionComponent, ApiBossesComponent,
         ApiItemComponent, ApiMountComponent, ApiPetComponent,
         ApiPvpComponent, ApiQuestComponent, ApiRecipeComponent, ApiRealmStatusComponent,
         ApiSpellComponent, ApiZonesComponent } from './pages/api/api-barrel';


const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'api', component: ApiRootComponent},
  {path: 'api/achievement', component: ApiAchievementComponent},
  {path: 'api/auction', component: ApiAuctionComponent},
  {path: 'api/bosses', component: ApiBossesComponent},
  {path: 'api/item', component: ApiItemComponent},
  {path: 'api/mount', component: ApiMountComponent},
  {path: 'api/pet', component: ApiPetComponent},
  {path: 'api/pvp', component: ApiPvpComponent},
  {path: 'api/quest', component: ApiQuestComponent},
  {path: 'api/recipe', component: ApiRecipeComponent},
  {path: 'api/realm-status', component: ApiRealmStatusComponent},
  {path: 'api/spell', component: ApiSpellComponent},
  {path: 'api/zones', component: ApiZonesComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
