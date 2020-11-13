import { SubjectService } from './../services/subject.service';
import { Router, ActivatedRoute } from '@angular/router';
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

  @Input()
  index: number;

  subjectName: string;

  constructor(public subjectService: SubjectService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subjectName = this.route.snapshot.paramMap.get('subjectName');
  }

  newStudent(){
    this.subjectService.addStudent(this.student, this.subjectName).subscribe((res: Response) => {
      this.router.navigateByUrl('/subjects')
    });
  }
}
