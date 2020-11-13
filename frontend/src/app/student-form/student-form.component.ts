import { StudentService } from './../services/student.service';
import { SubjectService } from './../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;
  isSubmitted = false;
  subjectName;

  constructor(public subjectService: SubjectService, public studentService: StudentService, private router: Router, 
              private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.subjectName = this.route.snapshot.paramMap.get('subjectName');
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      address: ['', [Validators.required, Validators.nullValidator]],
      phone1: ['', [Validators.required, Validators.nullValidator]],
      phone2: ['', [Validators.required, Validators.nullValidator]]
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
    const name = this.studentForm.value.name;
    const address = this.studentForm.value.address;
    const phone1 = this.studentForm.value.phone1;
    const phone2 = this.studentForm.value.phone2;
    const phones = [{"key":"home","value":phone1},{"key":"work","value":phone2}];
    let student = {'name': name, 'address': address, 'phones': phones};
    console.log("NEW STUDENT: ", student);
    if(this.subjectName==null) {
      this.studentService.newStudent(student)
      .subscribe(() => {
        this.router.navigateByUrl('/students');
      });
    } else {
      this.subjectService.addStudent(student, this.subjectName)
      .subscribe(() => {
        this.router.navigateByUrl('/subjects');
      })
    }
  }
}
