import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RequestsComponent } from './components/header/requests/requests.component';
import { RequestItemComponent } from './components/shared/request-item/request-item.component';


@NgModule({

  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, SliderComponent,NotFoundComponent,RequestsComponent, RequestItemComponent],

  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
