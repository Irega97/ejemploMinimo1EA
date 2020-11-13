import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from '../model/subject'
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  subjectForm: FormGroup;
  isSubmitted = false;
  constructor(public subjectService: SubjectService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.subjectForm = this.formBuilder.group({
      name:['', [Validators.required, Validators.nullValidator]]
    });
  }
  get formControls(){
    return this.subjectForm.controls;
  }

  submitSubject(): void {
    this.isSubmitted = true;
    if(this.subjectForm.invalid){
      return;
    }
    this.subjectService.newSubject(this.subjectForm.value)
    .subscribe((subject: Subject) => {
      console.log("NEW SUBJECT: ", subject);
      this.router.navigateByUrl('/subjects');
    });
  }

}