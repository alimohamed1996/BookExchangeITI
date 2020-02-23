import { SharedModule } from "./../shared/shared.module";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { SliderComponent } from "./slider/slider.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [HomeComponent, SliderComponent],
  imports: [HomeRoutingModule, SharedModule],
  exports: [HomeComponent, SliderComponent]
})
export class HomeModule {}
