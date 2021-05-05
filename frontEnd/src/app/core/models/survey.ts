import { Question } from "./question";

export class Survey {
  id: number;
  anonymous: boolean;
  title: string;
  type: string;
  organizationId: number;
  createrId: number;
  surveyTypeId: number;
  createdAt: Date;
  updatedAt: Date;
  questions: Question[];
  constructor(surveys) {
    this.id = surveys.id || this.getRandomID();
    this.title = surveys.title;
    this.type = surveys.type;
    this.anonymous = surveys.anonymous;
    this.createrId = surveys.createrId;
    this.surveyTypeId = surveys.surveyTypeId;
    this.organizationId = surveys.organizationId;
  }

  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
