import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CriarUsuarioComponent } from './pages/home/criar-usuario/criar-usuario.component';
import { ListarUsuariosComponent } from './pages/home/listar-usuarios/listar-usuarios.component';
import { UsuariosService } from './pages/home/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { EditarUsuarioComponent } from './pages/home/editar-usuario/editar-usuario.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CriarUsuarioComponent,
    ListarUsuariosComponent,
    EditarUsuarioComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
      
  ],
  providers: [
    UsuariosService,
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
