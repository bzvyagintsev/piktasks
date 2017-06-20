import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

import { TaskService } from './_services/task.service';
import { SearchFilterPipe } from './_pipes/search-filter.pipe';
import { ClickOutsideDirective } from './_directives/click-outside.directive';
import { TaskCreateComponent } from './task-create/task-create.component';

const ROUTES = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskComponent },
  { path: 'task-create', component: TaskCreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    SearchFilterPipe,
    ClickOutsideDirective,
    TaskCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot(),
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    TaskService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
