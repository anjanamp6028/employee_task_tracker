import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainServicesService } from './services/main-services.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeTasksComponent } from './employee-tasks/employee-tasks.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    EmployeeTasksComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    MainServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
