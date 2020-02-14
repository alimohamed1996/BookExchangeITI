import {
  SliderService,
  SliderData
} from "./../../../services/home/slider.service";
import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  sliderDatas: SliderData[];
  currentSliderIndex = 0;
  currentSliderData: SliderData;
  constructor(private service: SliderService) {}

  ngOnInit() {
    this.sliderDatas = this.service.getAllSlidersData();
    this.currentSliderData = this.sliderDatas[0];
  }
  nextClick(divBackground) {
    console.log(divBackground.style);
    this.currentSliderIndex++;
    if (this.currentSliderIndex >= this.sliderDatas.length) {
      this.currentSliderIndex = 0;
    }
    this.getCurrentSliderData();
    divBackground.style.backgroundImage = `url(${this.currentSliderData.backGroundUrl})`;
  }
  prevClick(divBackground) {
    this.currentSliderIndex--;
    if (this.currentSliderIndex < 0) {
      this.currentSliderIndex = this.sliderDatas.length - 1;
    }
    this.getCurrentSliderData();
    divBackground.style.backgroundImage = `url(${this.currentSliderData.backGroundUrl})`;
  }
  getCurrentSliderData() {
    this.currentSliderData = this.sliderDatas[this.currentSliderIndex];
  }
}
