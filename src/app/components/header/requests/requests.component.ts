import { RequestsMinService } from "./../../../services/requests-min.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RequestItemMin } from 'src/app/models/request_item.model';

@Component({
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.css"]
})
export class RequestsComponent implements OnInit {
  @Input() showRequests: boolean;
  @Output() closeRequests = new EventEmitter<boolean>();
  listOfRequests: RequestItemMin[];
  constructor(private requestsMinService: RequestsMinService) {}

  ngOnInit() {
    this.listOfRequests = this.requestsMinService.getListOfRequests();
  }
  onCloseClick() {
    this.showRequests = false;
    this.closeRequests.emit(this.showRequests);
  }
}
