import { Component, OnInit, ViewChild } from "@angular/core";

import { Observable, empty, Subject } from "rxjs";
import { catchError, delay } from "rxjs/operators";
import { UsuariosService } from "./../usuarios.service";
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Usuario } from "./../usuario.model";


@Component({
  selector: "app-listar-usuarios",
  templateUrl: "./listar-usuarios.component.html",
  styleUrls: ["./listar-usuarios.component.css"],
})

export class ListarUsuariosComponent implements OnInit {
  public usuarios: Usuario[];

  usuarios$: Observable<Usuario[]>;
  error$ = new Subject<boolean>();
  usuarioselecionado: Usuario
  @ViewChild("deleteModal") deleteModal;
  deleteModalRef: BsModalRef

  constructor(private usuarioService: UsuariosService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private modalService: BsModalService) {}

  ngOnInit(): void {
    this.onRefresh()
  }
  
  onRefresh()
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
  onDelete(curso)
  {
    this.usuarioselecionado = curso;
    console.log(this.usuarioselecionado);
    
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-lg' });
   
  }
  onConfirmDelete()
  {
    this.usuarioService.Apagar(this.usuarioselecionado).subscribe(
      success => {        
        this.onRefresh();    
        this.deleteModalRef.hide();     
      },
      error => {
        this.onRefresh();  
        this.deleteModalRef.hide();
      })
  }
  onDeclineDelete()
  {
    this.deleteModalRef.hide();
  }
}
