import { Organization } from "./organization";
import { Question } from "./question";

export class Survey {
  constructor(
    public anonymous: boolean,
    public title: string,
    public type: string,
    public orgId: number,
    public createrId: number,
    public question: Question[]
  ) {}
}
