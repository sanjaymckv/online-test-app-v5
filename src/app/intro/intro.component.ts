import { Component,EventEmitter, Input, Output, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"]
})
export class IntroComponent implements OnInit {
  form: FormGroup = new FormGroup({
 });
  constructor(private _router: Router) {}
  ngOnInit() {

 }
  submit() {
  this._router.navigate(["/quiz"]);
  }
}