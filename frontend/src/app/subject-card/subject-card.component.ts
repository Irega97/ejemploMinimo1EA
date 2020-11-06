import { Router } from '@angular/router';
import { Subject } from './../model/subject';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {

  @Input()
  subject: Subject;

  @Input()
  subjectIndex: number;

  @Input()
  students: Student;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addStudent(){
    this.router.navigateByUrl('/newStudent');
  }

}
