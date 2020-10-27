import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject';
import { SubjectService } from '../services/subject.service'

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[];

  constructor(public subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe (subjects => {
      this.subjects = subjects;
    })
  }

}
