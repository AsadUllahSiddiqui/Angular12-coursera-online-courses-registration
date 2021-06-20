import { DetailComponent } from './detail/detail.component';
import { CoursesComponent } from './courses/courses.component';
import { SubCoursesComponent } from './sub-courses/sub-courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartingPageComponent } from './starting-page/starting-page.component';
const routes: Routes = [
  {path:"Sub-Courses/:name",component:SubCoursesComponent},
  {path:"Courses",component:CoursesComponent},
  {path:"Details/:id/:title/:rating/:price",component:DetailComponent},
  {path:"Staring-Page",component:StartingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents=[SubCoursesComponent,CoursesComponent,DetailComponent,StartingPageComponent]
