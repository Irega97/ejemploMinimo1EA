import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  { path: 'admin', component: AdminComponent},
  { path: 'students', component: StudentsComponent},
  { path: 'subjects', component: SubjectsComponent},
  { path: 'subjects/add/:subjectName', component: StudentFormComponent},
  { path: 'newSubject', component: SubjectFormComponent},
  { path: 'newStudent', component: StudentFormComponent},
  { path: 'newStudent/:subjectName', component: StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
