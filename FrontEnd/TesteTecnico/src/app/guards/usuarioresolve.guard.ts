
import { Usuario } from './../pages/home/usuario.model';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsuariosService } from './../pages/home/usuarios.service';


export class UsuarioresolveGuard implements Resolve<Usuario> {

  constructor(private service: UsuariosService) {
  
    
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Usuario | Observable<Usuario> | Promise<Usuario> {
    
    if(route.params && route.params.id){
      return this.service.obterUsuarioId(route.params.id)
    }
   
  }
    
}
