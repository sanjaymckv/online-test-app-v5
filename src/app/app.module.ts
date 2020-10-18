import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from './material.module';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { HttpClientModule } from "@angular/common/http";
import { QuizLayoutComponent } from "./quiz-layout/quiz-layout.component";
import { IntroComponent } from "./intro/intro.component";
export const routes: Routes = [
  {
    path: "",
      children: [
      {
        path: "",
        component: IntroComponent
      }
    ]
  },
  {
    path: "",
    component: QuizLayoutComponent,
    children: [
      {
        path: "quiz",
        component: QuizComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizLayoutComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
