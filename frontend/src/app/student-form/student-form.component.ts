import { SubjectService } from './../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;
  isSubmitted = false;
  url;
  subjectName;

  constructor(public subjectService: SubjectService, private router: Router, 
              private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.subjectName = this.route.snapshot.paramMap.get("subjectName")
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      address: ['', [Validators.required, Validators.nullValidator]],
      phone1: ['', [Validators.required, Validators.nullValidator]],
      phone2: ['']
    });
  }
  get formControls(){
    return this.studentForm.controls;
  }

  submitStudent(): void {
    this.isSubmitted = true;
    if(this.studentForm.invalid){
      return;
    }
    this.subjectService.addStudent(this.studentForm.value, this.subjectName)
    .subscribe((student: Student) => {
      this.router.navigateByUrl('/subjects');
    });
  }

}
