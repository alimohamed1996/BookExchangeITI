import { UserItemComponent } from "./user-item/user-item.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookListComponent } from "../home/book-list/book-list.component";
import { ChangeBackgroundDirective } from "src/app/directives/change-background.directive";
import { BookItemComponent } from "./book-item/book-item.component";
import { UserListComponent } from "../home/user-list/user-list.component";
import { BookOverviewComponent } from "./book-overview/book-overview.component";
import { BooklistComponent } from "./booklist/booklist.component";

@NgModule({
  declarations: [
    BookListComponent,
    ChangeBackgroundDirective,
    BookItemComponent,
    UserListComponent,
    UserItemComponent,
    BookOverviewComponent,
    BooklistComponent
  ],
  imports: [CommonModule],
  exports: [
    BookListComponent,
    ChangeBackgroundDirective,
    BookItemComponent,
    UserListComponent,
    UserItemComponent,
    BooklistComponent,
    CommonModule
  ]
})
export class SharedModule {}
