 import {Option} from './option'
 
 export class Question{

constructor(

public id: number,
public type:string,
public text:string,
public options: Option[],
public required:true,




){}


 }