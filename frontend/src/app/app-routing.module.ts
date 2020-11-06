import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/subjects' },
  { path: 'subjects', component: SubjectsComponent},
  { path: 'newSubject', component: SubjectFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
