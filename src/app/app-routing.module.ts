import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCorredorComponent } from './pages/agregar-corredores/agregar-corredor.component';
import { ListaCorredoresComponent } from './pages/listar-corredores/listar-corredores.component';
import { EditarCorredoresComponent } from './pages/editar-corredores/editar-corredores.component';

const routes: Routes = [
  {path: '', redirectTo: 'agregar-corredor', pathMatch: 'full'},
  {path: 'agregar-corredor', component: AgregarCorredorComponent},
  {path: 'listar-corredor', component: ListaCorredoresComponent},
  {path: 'editar-corredor/:id', component: EditarCorredoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
