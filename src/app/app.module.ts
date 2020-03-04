import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';

import { CacheService, CacheStorageAbstract, CacheLocalStorage } from 'ng2-cache';
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
import { DataService, UserService,} from './services';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AssignTagComponent } from './assign-tag/assign-tag.component';
import { MaterialModule } from './material-module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserDisplayComponent } from './user/user-display/user-display.component';
import { UserMantComponent } from './user/user-mant/user-mant.component';
import { FarmComponent } from './farm/farm.component';
import { FarmDisplayComponent } from './farm/farm-display/farm-display.component';
import { FarmMantComponent } from './farm/farm-mant/farm-mant.component';
import { BlockComponent } from './block/block.component';
import { BlockMantComponent } from './block/block-mant/block-mant.component';
import { BlockDisplayComponent } from './block/block-display/block-display.component';
import { CableComponent } from './cable/cable.component';
import { CableMantComponent } from './cable/cable-mant/cable-mant.component';
import { CableDisplayComponent } from './cable/cable-display/cable-display.component';
import { TeamComponent } from './team/team.component';
import { TeamMantComponent } from './team/team-mant/team-mant.component';
import { TeamDisplayComponent } from './team/team-display/team-display.component';


const APP_PROVIDERS = [
    AuthService,
    DataService,
    CacheService,
    UserService,
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
    AssignTagComponent,
    SidenavComponent,
    UserDisplayComponent,
    UserMantComponent,
    FarmComponent,
    FarmDisplayComponent,
    FarmMantComponent,
    BlockComponent,
    BlockMantComponent,
    BlockDisplayComponent,
    CableComponent,
    CableMantComponent,
    CableDisplayComponent,
    TeamComponent,
    TeamMantComponent,
    TeamDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    CollapseModule.forRoot(),
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
