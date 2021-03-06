import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  private _routerSubscription = Subscription.EMPTY;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _title: Title,
  ) {}

  ngOnInit(): void {
    const appTitle = this._title.getTitle();
    this._routerSubscription = this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this._activatedRoute.firstChild;
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.data["title"]) {
            return `${child.snapshot.data["title"] as string} - Immerge`;
          }
          return appTitle;
        }),
      )
      .subscribe((title: string) => {
        this._title.setTitle(title || "Immerge");
      });
  }

  ngOnDestroy(): void {
    this._routerSubscription.unsubscribe();
  }
}
