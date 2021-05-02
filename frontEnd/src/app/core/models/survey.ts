import { Question } from "./question";

export class Survey {
  id: number;
  uuid: string;
  anonymous: boolean;
  title: string;
  type: string;
  organizationId: number;
  createrId: number;
  createdAt: Date;
  updatedAt: Date;
  questions: Question[];
  constructor(surveys) {
    this.id = surveys.id || this.getRandomID();
    this.title = surveys.title;
    this.type = surveys.type;
  }

  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
