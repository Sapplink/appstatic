import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page/about-page.component';


const routes: Routes = [
  {
    path:'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'designs',
    component: LandingPageComponent
  },
  {
    path: 'projects',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
