import { LoginService } from "./../../services/user/login/login.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  showRequests: boolean;
  showLoginAndSignUp: boolean = true;
  constructor(private router: Router, private login: LoginService) {}

  ngOnInit() {
    this.searchToggler();
    this.mobileMenu();
    this.stickyHeader();
    this.login.isLoggedIn();
    this.login.loggedIn.subscribe(res => {
      console.log(res);

      this.showLoginAndSignUp = !res;
    });
    this.login.isLoggedIn();
  }
  mobileMenu() {
    ($("nav.mobilemenu__nav") as any).meanmenu({
      meanMenuClose: "X",
      meanMenuCloseSize: "18px",
      meanScreenWidth: "991",
      meanExpandableChildren: true,
      meanMenuContainer: ".mobile-menu",
      onePage: true
    });
  }

  onShowMinRequestsClick() {
    this.showRequests = true;
  }
  toggleRequestStates(event) {
    this.showRequests = event;
  }
  searchToggler() {
    var trigger = $(".search__active"),
      container = $(".search_active");
    trigger.on("click", function(e) {
      e.preventDefault();
      container.toggleClass("is-visible");
    });
    $(".close__wrap").on("click", function() {
      container.removeClass("is-visible");
    });
  }

  stickyHeader() {
    $(window).on("scroll", function() {
      var sticky_menu = $(".sticky__header");
      var pos = sticky_menu.position();
      if (sticky_menu.length) {
        var windowpos = (sticky_menu as any).top;
        $(window).on("scroll", function() {
          var windowpos = $(window).scrollTop();
          if (windowpos > pos.top + 250) {
            sticky_menu.addClass("is-sticky");
          } else {
            sticky_menu.removeClass("is-sticky");
          }
        });
      }
    });
  }
  test() {
    // [routerLink]='[{ outlets: { modalShared: ["book","add"] } }]'
    this.router.navigate([{ outlets: { modalShared: ["book", "add"] } }]);
    // (click)="test()"
  }
}
