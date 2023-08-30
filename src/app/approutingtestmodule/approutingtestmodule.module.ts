import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import routes from '../routes';
import apptestingroutes from './apptestroutes';
import { NotificationComponent } from '../notification/notification.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(apptestingroutes),
    NotificationComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ApproutingtestmoduleModule { }
