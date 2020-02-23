import { UserService } from "./../../../services/user/user/user.service";
import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book_item.model";

@Component({
  selector: "app-userhavebooks",
  templateUrl: "./userhavebooks.component.html",
  styleUrls: ["./userhavebooks.component.css"]
})
export class UserhavebooksComponent implements OnInit {
  books: Book[];

  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.getUserHaveBook().subscribe(res => {
      this.books = res;
    });
  }
}
