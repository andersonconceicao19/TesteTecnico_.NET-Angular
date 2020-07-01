import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CriarUsuarioComponent } from './pages/home/criar-usuario/criar-usuario.component';
import { ConfirmarDeletarUsuarioComponent } from './pages/home/confirmar-deletar-usuario/confirmar-deletar-usuario.component';
import { EditarUsuarioComponent } from './pages/home/editar-usuario/editar-usuario.component';






const routes: Routes = [
{path: '', component: HomeComponent},
{path:'novo', component: CriarUsuarioComponent },
{path: 'editar/:id', component: EditarUsuarioComponent },
{path: 'apagar/:id', component: ConfirmarDeletarUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
