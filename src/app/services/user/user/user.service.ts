import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
import { LoginService } from "./../login/login.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "src/app/models/book_item.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(
    private http: HttpClient,
    private service: LoginService,
    private router: Router
  ) {}

  getUserHaveBook(userId?): Observable<Book[]> {
    let id;
    if (!userId && this.service.isLoggedIn()) {
      let jwtHelper = new JwtHelperService();
      let token = localStorage.getItem("token");
      id = jwtHelper.decodeToken(token)["LogUserId"];
    } else {
      this.router.navigate(["notFount"]);
      return;
    }
    return this.http.get<Book[]>(
      "http://localhost:52558/api/user/having/" + id
    );
  }
}