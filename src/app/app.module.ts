import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,rountingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { StartingPageComponent } from './starting-page/starting-page.component';
// import { CoursesComponent } from './courses/courses.component';
// import { SubCoursesComponent } from './sub-courses/sub-courses.component';
// import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    rountingComponents
    // CoursesComponent,
    // SubCoursesComponent,
    // DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
