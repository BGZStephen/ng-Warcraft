import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ApiRootComponent } from './pages/api/api-root/api-root.component';
import { ApiBossesComponent } from './pages/api/api-bosses/api-bosses.component';
import { ApiItemComponent } from './pages/api/api-item/api-item.component';
import { ApiQuestComponent } from './pages/api/api-quest/api-quest.component';
import { ApiRealmStatusComponent } from './pages/api/api-realm-status/api-realm-status.component';
import { ApiZonesComponent } from './pages/api/api-zones/api-zones.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'api', component: ApiRootComponent},
  {path: 'api/bosses', component: ApiBossesComponent},
  {path: 'api/item', component: ApiItemComponent},
  {path: 'api/quest', component: ApiQuestComponent},
  {path: 'api/realm-status', component: ApiRealmStatusComponent},
  {path: 'api/zones', component: ApiZonesComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
