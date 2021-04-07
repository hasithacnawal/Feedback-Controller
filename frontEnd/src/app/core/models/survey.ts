import {Question} from './question';

export class Survey{

constructor(

public id : number,
public type: string,
public title: string,
public isDeleted : boolean,
public isAnonymous : boolean,
public question : Question []



){}

}