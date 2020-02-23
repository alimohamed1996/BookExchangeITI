import { Book } from "src/app/models/book_item.model";
import { BooksService } from "./../../../services/book/books.service";
import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentChecked,
  ViewChildren,
  QueryList
} from "@angular/core";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent
  implements OnInit, AfterViewInit, AfterContentChecked {
  @ViewChildren("allTheseThings") things: QueryList<any>;
  ngAfterContentChecked(): void {
    // this.  owl();
  }
  ngAfterViewInit(): void {
    this.things.changes.subscribe(ww => {
      this.owl();
    });
  }

  books: Book[];

  constructor(private service: BooksService) {}

  ngOnInit() {
    this.service.getAllBooks().subscribe(res => {
      this.books = res;
    });
  }
  owl() {
    ($(".furniture--4") as any).owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: false,
      autoplayTimeout: 10000,
      items: 4,
      navText: [
        '<i class="zmdi zmdi-chevron-left"></i>',
        '<i class="zmdi zmdi-chevron-right"></i>'
      ],
      dots: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        },
        1920: {
          items: 4
        }
      }
    });
  }
}
