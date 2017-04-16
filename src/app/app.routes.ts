import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ApiRootComponent } from "./pages/api/api-root/api-root.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'api', component: ApiRootComponent}
]

export const router = RouterModule.forRoot(APP_ROUTES)
