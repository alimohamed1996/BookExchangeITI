import { RequestsMinService } from "./../../../services/requests-min.service";
import { RequestItemMin } from "./../../../models/request_item.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-request-item",
  templateUrl: "./request-item.component.html",
  styleUrls: ["./request-item.component.css"]
})
export class RequestItemComponent implements OnInit {
  @Input() requestItem: RequestItemMin;
  constructor() {}

  ngOnInit() {}
}
