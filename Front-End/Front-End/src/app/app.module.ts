import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Hoja1Component } from './componentes/hoja1/hoja1.component';
import { Hoja2Component } from './componentes/hoja2/hoja2.component';
import { Hoja3Component } from './componentes/hoja3/hoja3.component';
import { Hoja4Component } from './componentes/hoja4/hoja4.component';
import { Hoja5Component } from './componentes/hoja5/hoja5.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    FormularioComponent,
    HistorialComponent,
    InicioComponent,
    Hoja1Component,
    Hoja2Component,
    Hoja3Component,
    Hoja4Component,
    Hoja5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
