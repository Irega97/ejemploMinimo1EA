import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { Subject } from '../model/subject';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  @Input()
  student: Student;

  @Input()
  index: number;

  constructor() { }

  ngOnInit(): void {
    console.log("PREGUNTAR PORQUE NO VAN PHONES EN STUDENT-CARD")
    console.log(this.student.phones);
  }
}
