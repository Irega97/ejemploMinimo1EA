import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  @Input()
  student: Student;

  constructor() { }

  ngOnInit(): void {
  }

}
