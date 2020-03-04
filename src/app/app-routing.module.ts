import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { LoginComponent } from './login/login.component';
import { AreaConfigComponent } from './area-config/area-config.component';
import { UserComponent } from './user/user.component';
import { EmployeesComponent } from './employees/employees.component';
import { AssignTagComponent } from './assign-tag/assign-tag.component';
import { FarmComponent } from './farm/farm.component';
import { BlockComponent } from './block/block.component';
import { CableComponent } from './cable/cable.component';
import { TeamComponent } from './team/team.component';
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
        path: 'team',  
        component: TeamComponent,
        resolve: {
            csrf: CsrfResolver
        }
    },
    { 
        path: 'user',  
        component: UserComponent,
        resolve: {
            csrf: CsrfResolver
        }
    },
    { 
        path: 'block',  
        component: BlockComponent,
        resolve: {
            csrf: CsrfResolver
        }
    },
    { 
        path: 'cable',  
        component: CableComponent,
        resolve: {
            csrf: CsrfResolver
        }
    },
    { 
        path: 'farm',  
        component: FarmComponent,
        resolve: {
            csrf: CsrfResolver
        }
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
  exports: [RouterModule],
  providers:[CsrfResolver]
})
export class AppRoutingModule { }
