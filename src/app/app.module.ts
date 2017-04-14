import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { ApiSearchService } from "./services/api-search.service"

import { AppComponent } from './app.component';
import { ApiTestingComponent } from './api-testing/api-testing.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiTestingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [ApiSearchService],
  bootstrap: [AppComponent]
})

export class AppModule { }
