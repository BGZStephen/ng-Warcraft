import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ApiTestingComponent } from "./pages/api-testing/api-testing.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'api', component: ApiTestingComponent}
]

export const router = RouterModule.forRoot(APP_ROUTES)
