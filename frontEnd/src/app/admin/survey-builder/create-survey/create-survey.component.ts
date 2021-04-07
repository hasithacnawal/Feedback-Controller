import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray,Validators, FormBuilder} from '@angular/forms';
import {Survey} from 'src/app/core/models/survey';
import{Question} from 'src/app/core/models/question';
import {Option} from 'src/app/core/models/option';

   
@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
