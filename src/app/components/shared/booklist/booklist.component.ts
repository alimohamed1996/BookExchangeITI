import { Book } from "./../../../models/book_item.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-booklist",
  templateUrl: "./booklist.component.html",
  styleUrls: ["./booklist.component.css"]
})
export class BooklistComponent implements OnInit {
  @Input() books: Book[];
  constructor() {}

  ngOnInit() {}
}
