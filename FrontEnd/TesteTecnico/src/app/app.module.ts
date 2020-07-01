import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CriarUsuarioComponent } from './pages/home/criar-usuario/criar-usuario.component';
import { AtualizarUsuarioComponent } from './pages/home/atualizar-usuario/atualizar-usuario.component';
import { ListarUsuariosComponent } from './pages/home/listar-usuarios/listar-usuarios.component';
import { UsuariosService } from './pages/home/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CriarUsuarioComponent,
    AtualizarUsuarioComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UsuariosService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
