import { MultipleOption } from "./multipleOption";

export class Question {
  id: number;
  uuid: number;
  questionTitle: string;
  type: string;
  surveyId: number;
  multipleOption: MultipleOption[];

  constructor() {}
}
