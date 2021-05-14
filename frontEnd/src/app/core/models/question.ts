import { MultipleOption } from "./multipleOption";

// export class Question {
//   public id: number;
//   uuid: number;
//   questionTitle: string;
//   type: string;
//   surveyId: number;
//   multipleOption: MultipleOption[];

//   constructor(question) {
//     (this.id = question.id),
//       (this.uuid = question.uuid),
//       (this.questionTitle = question.questionTitle),
//       (this.type = question.type),
//       (this.surveyId = question.surveyId),
//       (this.multipleOption = question.multipleOption);
//   }
// }
export class Question {
  constructor(
    public uuid: number,
    public questionTitle: string,
    public questionType: string,
    //public required:true,
    //public surveyId: number,
    public multipleOptions: MultipleOption[] //public questions: Question[]
  ) {}
}
