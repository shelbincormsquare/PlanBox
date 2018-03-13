import { PublicLayoutComponent } from './components/_shared/layouts/public/public-layout/public-layout.component';
import { DashboardLayoutComponent } from './components/_shared/layouts/dashboard/dashboard-layout/dashboard-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { ProjectFormComponent } from './components/projects/project-form/project-form.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';




const appRoutes: Routes = [

    // RouterModule.forRoot([
    //     { path: '', redirectTo: 'home', pathMatch: 'full' },
    //     { path: 'projects/new', component: ProjectFormComponent },
    //     { path: 'projects/list', component: ProjectListComponent },
    //     { path: 'projects/:id', component: ProjectFormComponent},
    //     { path: 'home', component: HomeComponent },
    //     { path: 'counter', component: CounterComponent },
    //     { path: 'fetch-data', component: FetchDataComponent },
    //     { path: '**', redirectTo: 'home' }
    //Site routes goes here 
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [
            { path: 'projects/new', component: ProjectFormComponent },
            { path: 'projects', component: ProjectListComponent },
            { path: 'projects/:id', component: ProjectFormComponent }
        ]
    },

    // App routes goes here here
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent }
        ]
    },

    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);


