import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { QuizService } from "../services/quiz.service";
import { Option, Question, Quiz,  } from "../models/index";
@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode = "quiz";
  quizName: string;

 pager = {
   index: 0,
   size: 1,
   count: 1
  };
  constructor(
    private quizService: QuizService,
    private _router: Router
     ) {}

  ngOnInit() {
     this.quizes =[
    { id: "Math", name: "Math" }
    ];
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
  }

  loadQuiz(quizName: string) {
   let getQuestion = this.quizService.get(quizName);
    this.quiz = new Quiz(getQuestion);
    this.pager.count = this.quiz.questions.length;
    this.mode = "quiz";
  }
  
  get filteredQuestions() {
    return this.quiz.questions
      ? this.quiz.questions.slice(
          this.pager.index,
          this.pager.index + this.pager.size
        )
      : [];
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach(x => {
        if (x.id !== option.id) x.selected = false;
      });
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = "quiz";
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? "Answered" : "Not Answered";
  }

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer)
      ? "correct"
      : "wrong";
  }

  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x =>
      answers.push({
        quizId: this.quiz.id,
        questionId: x.id,
        answered: x.answered
      })
    );
    this.mode = "result";
  }
  @HostListener("window:focus", ["$event"])
  onFocus(event: any): void {
  }

  @HostListener("window:blur", ["$event"])
  onBlur(event: any): void {
    console.log("On Blur");
  }
  @HostListener("window:beforeunload", ["$event"])
  unloadNotification($event: any) {}
}
