import { Student } from '../model/student';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../model/subject';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get<Student[]>(environment.apiURL+'/student/all')
  }

  newStudent(newStudent: Student){
    return this.http.post(environment.apiURL + '/student/new', newStudent);
  }
}
