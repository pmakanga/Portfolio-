import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectComponent } from './project/project.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'list', component: ProjectListComponent
      },
      {
        path: 'create', component: ProjectCreateComponent
      },
      {
        path: 'update', component: ProjectUpdateComponent
      }
    ])
  ],
  declarations: [
    AdminComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectUpdateComponent,
    ProjectComponent

  ]
})
export class AdminModule { }
