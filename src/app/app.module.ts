import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';

import { CacheService, CacheStorageAbstract, CacheLocalStorage } from 'ng2-cache';
import { MatTableModule} from '@angular/material/table';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { WeightComponent } from './weight/weight.component';
import { ReadRfidComponent } from './read-rfid/read-rfid.component';
import { AreaConfigComponent } from './area-config/area-config.component';
import { AreaComponent } from './area/area.component';
import { WorkShiftComponent } from './work-shift/work-shift.component';
import { EmployeesComponent } from './employees/employees.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth';
import { DataService } from './core';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AssignTagComponent } from './assign-tag/assign-tag.component';


const APP_PROVIDERS = [
    AuthService,
    DataService,
    CacheService,
    { provide: CacheStorageAbstract, useClass: CacheLocalStorage },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkflowComponent,
    WeightComponent,
    ReadRfidComponent,
    AreaConfigComponent,
    AreaComponent,
    WorkShiftComponent,
    EmployeesComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    AssignTagComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MatTableModule,
    MatCheckboxModule,
    CollapseModule.forRoot(),
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
