import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray,Validators, FormBuilder} from '@angular/forms';
import {Survey} from 'src/app/core/models/survey';
import{Question} from 'src/app/core/models/question';
import {Option} from 'src/app/core/models/option';

   

export interface QuestionType{

  value:string;
  viewValue:string;
}
@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

    surveyForm : FormGroup;

    selectedOption =[];

  surveyTypes =[

    {id:0, value:'Training'},
    {id:1, value:'HR'}
  ];

  questions : QuestionType[]=[

    { value: 'Single choice', viewValue:'Single choice'},
    {value:'Multi choice', viewValue:'Multi choice'},
    {value:'Text', viewValue:'Text'},
  ];


  constructor() { }

  ngOnInit(): void {
  }


  private initForm(){

    let surveyTitle='';
    let surveyType='';
    let surveyQuestions = new FormArray([]);

    this.surveyForm = new FormGroup({

      'surveyTitle' : new FormControl(surveyTitle, [Validators.required]),
      'surveyType' : new FormControl(surveyType, [Validators.required]),
      'surveyQuestions' : surveyQuestions,
      'IsAnonymous': new FormControl(false, [Validators.required])
   
    });

    this.onAddQuestion();
  }


  onAddQuestion(){

    console.log(this.surveyForm);

    const surveyQuestionItem = new FormGroup({

      'questionTitle': new FormControl('',Validators.required),
      'questionType' : new FormControl('', Validators.required),
      'questionGroup': new FormGroup({})

    });

    (<FormArray>this.surveyForm.get('surveyQuestion')).push(surveyQuestionItem);
  }

  onRemoveQuestion(index){

    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup =new FormGroup({});
    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionType = new FormControl({});

    (<FormArray>this.surveyForm.get('surveyQuestions')).removeAt(index);

    this.selectedOption.splice(index,1)
    console.log(this.surveyForm);


  }
  
  onSelectQuestionType(questionType, index){

    if(questionType=='single choice'|| questionType=='Multi choice'){

      this.addOptionControls(questionType,index)
    }
  }


  addOptionControls(questionType, index){

      let options = new FormArray([]);

      (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('options', options);

      this.clearFormArray(
        (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options)
      );
      this.addOption(index);
      this.addOption(index);

  }

  private clearFormArray(formArray: FormArray){

    while(formArray.length !==0){

      formArray.removeAt(0)
    }
  }


  addOption(index){

    const optionGroup = new FormGroup({

      'optionText':new FormControl('', Validators.required),
    });

    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options).push(optionGroup);
  }

  removeOption(questionIndex, itemIndex){

    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][questionIndex].controls.questionGroup.controls.options).removeAt(itemIndex);
  }



  postSurvey(){

    let formData = this.surveyForm.value;

    console.log(formData);

    console.log();

    let id = 0
    let type =formData.surveyType;
    let title = formData.surveyTitle;
    let IsAnonymous = formData.IsAnonymous;

    let Questtions = [];

    let surveyQuestions = formData.surveyQuestions;
    let optionArray = formData.surveyQuestions[0].questionGroup.options[0].optionText
    //let survey = new Survey(id,type,title,IsAnonymous,questions)

    surveyQuestions.forEach((question,index, array)=>{

      let questionItem={

        
      }
    });


  }


}
