import { ServiceNameService } from "./../../../services/search/search.service";
import { Component, OnInit, ViewChild, ViewChildren } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { from } from "rxjs";
import { Book } from "src/app/models/book_item.model";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
  @ViewChild("BookImage", { static: true }) bookImage;
  bookImageUrl = "assets/images/product/big-img/1.jpg";
  form = new FormGroup({
    Title: new FormControl(),
    Author_Name: new FormControl(),
    Description: new FormControl(),
    Photo_Url: new FormControl()
    // UserWantBook: new FormControl()
  });

  constructor(private service: ServiceNameService) {}

  ngOnInit() {}
  keyword = "Title";
  data = Book[0];

  selectEvent(item: Book) {
    console.log(item);
    this.form.setValue({
      Title: item.Title,
      Author_Name: item.Author_Name,
      Description: item.Description,
      Photo_Url: item.Photo_Url
    });
    this.bookImageUrl = item.Photo_Url;
    console.log(this.bookImage.src);
  }

  onChangeSearch(val: string) {
    if (val.length > 3) {
      this.service.searchByName(val).subscribe(res => {
        this.data = res;
      });
    }
    this.bookImageUrl = "assets/images/product/big-img/1.jpg";
  }

  onFocused(e) {
    // do something when input is focused
  }
}
