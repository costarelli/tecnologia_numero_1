import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DizionarioComponent } from './dizionario/dizionario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DizionarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
