import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageWapperComponent } from './layout/page-wapper/page-wapper.component';
import { AlumnosPagesComponent } from './pages/alumnos-pages/alumnos-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWapperComponent,
    AlumnosPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
