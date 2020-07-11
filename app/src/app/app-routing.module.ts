import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { DesignsPageComponent } from './pages/designs-page/designs-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ReferencesComponent } from './references/references/references.component';


const routes: Routes = [
  {
    path:'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'designs',
    component: DesignsPageComponent
  },
  {
    path: 'projects',
    component: ProjectsPageComponent
  },
  {
    path: 'references',
    component: ReferencesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
