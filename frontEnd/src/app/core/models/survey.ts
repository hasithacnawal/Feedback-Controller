import {Question} from './question';

export class Survey{

constructor(

public uuid : number,
public anonymous : boolean,
public title: string,
public type: string,
public organizationId: number,
public createrId: number,
public question:Question[]


){}

}