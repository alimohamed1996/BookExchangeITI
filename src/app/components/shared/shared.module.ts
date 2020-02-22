import { BooklistComponent } from './booklist/booklist.component';
import { UserItemComponent } from "./user-item/user-item.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChangeBackgroundDirective } from "src/app/directives/change-background.directive";
import { BookItemComponent } from "./book-item/book-item.component";
import { UserListComponent } from "../home/user-list/user-list.component";
import { BookOverviewComponent } from "./book-overview/book-overview.component";
// import { BooklistComponent } from './booklist/booklist.component';
// import { BookListComponent } from '../home/book-list/book-list.component';

@NgModule({
  declarations: [
    BooklistComponent,
    ChangeBackgroundDirective,
    BookItemComponent,
    UserListComponent,
    UserItemComponent,
    BookOverviewComponent,
    
  ],
  imports: [CommonModule],
  exports: [
    BooklistComponent,
    ChangeBackgroundDirective,
    BookItemComponent,
    UserListComponent,
    UserItemComponent,
    CommonModule,
    
  ]
})
export class SharedModule {}
