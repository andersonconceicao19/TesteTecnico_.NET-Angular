import { UsuariosService } from "./../usuarios.service";
import { Usuario } from "./../usuario.model";
import { Component, OnInit } from "@angular/core";
import { error } from '@angular/compiler/src/util';

@Component({
  selector: "app-listar-usuarios",
  templateUrl: "./listar-usuarios.component.html",
  styleUrls: ["./listar-usuarios.component.css"],
})
export class ListarUsuariosComponent implements OnInit {
  public usuario: Usuario[];

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.usuarioService.obterUsuarios().subscribe(
      usuarios => this.usuario = usuarios,
      error=> console.log(error)
    );
  }
}
