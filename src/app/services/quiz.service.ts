import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MATH } from "../../data/math.data";
@Injectable()
export class QuizService {
  constructor(private http: HttpClient) {}
  get(type: string): any {
   let data: any;
    return MATH;
  }
}