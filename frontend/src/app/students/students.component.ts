import { ActivatedRoute } from '@angular/router';
import { StudentService } from './../services/student.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from '.././model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  subjectName: string;

  constructor(public studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subjectName = this.route.snapshot.paramMap.get('subjectName');
    this.studentService.getStudents().subscribe (students => {
      this.students = students;
    });
  }

  newStudent() {
    if(this.subjectName==null) this.router.navigateByUrl('/newStudent');
    else this.router.navigateByUrl('/subjects/add/'+this.subjectName);
  }

  admin(){
    this.router.navigateByUrl('/admin');
  }

}
