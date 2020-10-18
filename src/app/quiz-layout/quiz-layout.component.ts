import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-quiz-layout",
  templateUrl: "./quiz-layout.component.html",
  styleUrls: ["./quiz-layout.component.scss"]
})
export class QuizLayoutComponent implements OnInit {
  constructor(private _router: Router) {
  }
  ngOnInit() {}

  restart() {
    this._router.navigate([""]);
  }
}