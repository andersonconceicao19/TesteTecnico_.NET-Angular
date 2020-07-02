import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CriarUsuarioComponent } from './pages/home/criar-usuario/criar-usuario.component';
import { ListarUsuariosComponent } from './pages/home/listar-usuarios/listar-usuarios.component';
import { UsuariosService } from './pages/home/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmarDeletarUsuarioComponent } from './pages/home/confirmar-deletar-usuario/confirmar-deletar-usuario.component';
import { EditarUsuarioComponent } from './pages/home/editar-usuario/editar-usuario.component';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CriarUsuarioComponent,
    ListarUsuariosComponent,
    ConfirmarDeletarUsuarioComponent,
    EditarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    UsuariosService,
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
