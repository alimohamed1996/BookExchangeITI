import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  showRequests: boolean;
  constructor() {}

  ngOnInit() {}
  onShowMinRequestsClick() {
    this.showRequests = true;
  }
  toggleRequestStates(event) {
    this.showRequests = event;
  }
}
