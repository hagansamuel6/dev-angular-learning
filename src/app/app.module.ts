import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TourofherosComponent } from './tourofheros/tourofheros.component';
import { RouterModule, provideRouter } from '@angular/router';
import routes from './routes';
import { ApproutingtestmoduleModule } from './approutingtestmodule/approutingtestmodule.module';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    HomePageComponent,
    TourofherosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApproutingtestmoduleModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
