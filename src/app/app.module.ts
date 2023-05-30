import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FormularioReactivoComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
