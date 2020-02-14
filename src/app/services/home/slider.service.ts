import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SliderService {
  sliderDatas = [];
  constructor() {
    // debugger;
    // this.sliderDatas =SliderData[3];
    this.sliderDatas.push(
      new SliderData(
        "http://demo.devitems.com/boighor-v3/images/bg/7.jpg",
        "Empty",
        "Lalalalalalalalalalalalalalalalaldsadsa"
      )
    );
    this.sliderDatas.push(
      new SliderData(
        "http://demo.devitems.com/boighor-v3/images/bg/8.jpg",
        "Empty",
        "Lalalalalalalalalalalalalalalalal12321312"
      )
    );
    this.sliderDatas.push(
      new SliderData(
        "http://demo.devitems.com/boighor-v3/images/bg/6.jpg",
        "Empty",
        "Lalalalalalalalalalalalalalalalalhdsagas"
      )
    );
  }
  getAllSlidersData(): SliderData[] {
    return this.sliderDatas;
  }
}
export class SliderData {
  backGroundUrl: string;
  imageUrl: string;
  qoutes: string;
  /**
   *
   */
  constructor(_backGroundUrl: string, _imageUrl: string, _qoutes: string) {
    this.backGroundUrl = _backGroundUrl;
    this.imageUrl = _imageUrl;
    this.qoutes = _qoutes;
  }
}
