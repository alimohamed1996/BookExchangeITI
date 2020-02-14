import { Injectable } from "@angular/core";
import { RequestItemMin } from "../models/request_item.model";

@Injectable({
  providedIn: "root"
})
export class RequestsMinService {
  tempListOfRequest: RequestItemMin[];
  constructor() {
    this.tempListOfRequest = [];
    this.tempListOfRequest.push(
      new RequestItemMin(
        "Ali Mohamed",
        "جيكا مينالي",
        "http://demo.devitems.com/boighor-v3/images/product/sm-img/1.jpg"
      )
    );
    this.tempListOfRequest.push(
      new RequestItemMin(
        "Ali Mohamed",
        "جيكا مينالي",
        "http://demo.devitems.com/boighor-v3/images/product/sm-img/1.jpg"
      )
    );
    this.tempListOfRequest.push(
      new RequestItemMin(
        "Ali Mohamed",
        "جيكا مينالي",
        "http://demo.devitems.com/boighor-v3/images/product/sm-img/1.jpg"
      )
    );
  }
  getListOfRequests(): RequestItemMin[] {
    return this.tempListOfRequest;
  }
}
