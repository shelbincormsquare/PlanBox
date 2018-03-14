import { ProjectFormComponent } from './components/projects/project-form/project-form.component';
import { TopnavComponent } from './components/_shared/layouts/dashboard/topnav/topnav.component';
import { FooterComponent } from './components/_shared/layouts/dashboard/footer/footer.component';
import { SidenavComponent } from './components/_shared/layouts/dashboard/sidenav/sidenav.component';
import { HeaderComponent } from './components/_shared/layouts/dashboard/header/header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardLayoutComponent } from './components/_shared/layouts/dashboard/dashboard-layout/dashboard-layout.component';
import { PublicLayoutComponent } from './components/_shared/layouts/public/public-layout/public-layout.component';
import { ProjectService } from './services/project.service';
import { routing } from './app.routing';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        PublicLayoutComponent,
        DashboardLayoutComponent,
        HeaderComponent,
        SidenavComponent,
        FooterComponent,
        TopnavComponent,
        ProjectFormComponent,
        ProjectListComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        routing,
         ReactiveFormsModule
        // RouterModule.forRoot([
        //     { path: '', redirectTo: 'home', pathMatch: 'full' },
        //     { path: 'home', component: HomeComponent },
        //     { path: 'counter', component: CounterComponent },
        //     { path: 'fetch-data', component: FetchDataComponent },
        //     { path: '**', redirectTo: 'home' }
        // ])
    ],
    providers: [
        ProjectService
    ]
})
export class AppModuleShared {
}
