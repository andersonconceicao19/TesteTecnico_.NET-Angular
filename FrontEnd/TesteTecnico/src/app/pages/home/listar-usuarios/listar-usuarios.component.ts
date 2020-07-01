import { Usuario } from "./../usuario.model";
import { Component, OnInit } from "@angular/core";
import { Observable, empty, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { UsuariosService } from "./../usuarios.service";
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: "app-listar-usuarios",
  templateUrl: "./listar-usuarios.component.html",
  styleUrls: ["./listar-usuarios.component.css"],
})
export class ListarUsuariosComponent implements OnInit {
  public usuarios: Usuario[];

  usuarios$: Observable<Usuario[]>;
  error$ = new Subject<boolean>();

  constructor(private usuarioService: UsuariosService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.Onrefresh()
  }
  
  Onrefresh()
  {
    this.usuarios$ = this.usuarioService.obterUsuarios().pipe(
      catchError((error) => {
        console.log(error);
        this.error$.next(true)
        return empty();
      })
    );
  }

  onEdit(curso)
  {
    this.router.navigate(['editar', curso], { relativeTo: this.route })
  }
}
