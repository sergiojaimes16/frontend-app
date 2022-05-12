import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import { VerCursoComponent } from './components/ver-curso/ver-curso.component';

const routes: Routes = [
  {path: '', component: ListarCursosComponent},
  {path: 'crear-curso', component: CrearCursoComponent},
  {path: 'editar-curso/:id', component: CrearCursoComponent},
  {path: 'ver-curso/:id', component: VerCursoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
