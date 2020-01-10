import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { LoginComponent } from './login/login.component';
import { AreaConfigComponent } from './area-config/area-config.component';
import { UserComponent } from './user/user.component';
import { EmployeesComponent } from './employees/employees.component';
import { AssignTagComponent } from './assign-tag/assign-tag.component';
import { CsrfResolver} from './app.resolver';
import { AuthGuard } from './auth';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    { 
        path: 'workflow',  
        component: WorkflowComponent,
    },
    { 
        path: 'user',  
        component: UserComponent,
    },
    { 
        path: 'area',  
        component: AreaConfigComponent,
    },
    { 
        path: 'employees',  
        component: EmployeesComponent,
    },
    { 
        path: 'assign',  
        component: AssignTagComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
