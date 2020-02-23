import { UserListComponent } from "./../home/user-list/user-list.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { BookdetailsComponent } from "./bookdetails/bookdetails.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutocompleteLibModule } from "angular-ng-autocomplete";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ],
  declarations: [AddBookComponent, BookdetailsComponent],
  exports: [AddBookComponent, BookdetailsComponent]
})
export class BookModule {}
