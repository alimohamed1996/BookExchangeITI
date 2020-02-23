import { LoginService } from "./../../services/user/login/login.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent {
  form = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")
    ]),
    password: new FormControl("", Validators.required)
  });
  /**
   *
   */
  constructor(private service: LoginService) {}
  Email() {
    return this.form.get("email");
  }
  Password() {
    return this.form.get("password");
  }
  login(value) {
    this.service.login(value);
    console.log(value);
  }
}
