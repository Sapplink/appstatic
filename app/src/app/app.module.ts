import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageComponent } from './about-page/about-page/about-page.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { DesignsPageComponent } from './pages/designs-page/designs-page.component';
import { CardComponent } from './card/card/card.component';
import { AddPostComponent } from './add-post/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ReferencesComponent } from './references/references/references.component';
import { ContactComponent } from './contact/contact/contact.component';
import { FooterComponent } from './navigation/footer/footer/footer.component';
import { LanguageChangePopupComponent } from './language-change-popup/language-change-popup.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutPageComponent,
    NavigationComponent,
    DesignsPageComponent,
    CardComponent,
    AddPostComponent,
    ProjectsPageComponent,
    ReferencesComponent,
    ContactComponent,
    FooterComponent,
    LanguageChangePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [AboutPageComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
