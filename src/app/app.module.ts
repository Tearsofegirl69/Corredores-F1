import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarCorredorComponent } from './pages/agregar-corredores/agregar-corredor.component';
import { ListaCorredoresComponent } from './pages/listar-corredores/listar-corredores.component';
import { EditarCorredoresComponent } from './pages/editar-corredores/editar-corredores.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarCorredorComponent,
    ListaCorredoresComponent,
    EditarCorredoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
