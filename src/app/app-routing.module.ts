import { LoginPageComponent } from "./components/login-page/login-page.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddBookComponent } from "./components/book/add-book/add-book.component";

import { BookdetailsComponent } from "./components/book/bookdetails/bookdetails.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "book/add", component: AddBookComponent, outlet: "modalShared" },
  { path: "book/details/:id", component: BookdetailsComponent },

  { path: "**", pathMatch: "full", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
