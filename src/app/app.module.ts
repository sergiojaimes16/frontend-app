import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { VerCursoComponent } from './components/ver-curso/ver-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearCursoComponent,
    ListarCursosComponent,
    VerCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
