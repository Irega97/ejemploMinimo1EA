import { Student } from './../model/student';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../model/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getSubjects(){
    return this.http.get<Subject[]>(environment.apiURL + '/subject/all');
  }

  newSubject(newSubject: Subject) {
    return this.http.post(environment.apiURL + '/subject/new', newSubject);
  }

  addStudent(newStudent: Student, subjectName: string) {
    return this.http.post(environment.apiURL + '/subject/newStudent/' + subjectName, newStudent);
  }
}
