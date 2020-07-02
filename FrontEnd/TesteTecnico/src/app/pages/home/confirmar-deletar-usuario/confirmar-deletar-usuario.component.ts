import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { UsuariosService } from '../usuarios.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-confirmar-deletar-usuario',
  templateUrl: './confirmar-deletar-usuario.component.html',
  styleUrls: ['./confirmar-deletar-usuario.component.css']
})
export class ConfirmarDeletarUsuarioComponent implements OnInit {

  constructor( private route: ActivatedRoute, 
              private services: UsuariosService,
              private location: Location) { }
  id:any;

  ngOnInit(): void {
    this.id = this.route.params.pipe(
      map((params: any) => params["id"]),
      
    ).subscribe()
  }
  confirmar()
      {
        console.log(this.id);
        
        return this.services.Apagar(this.id).subscribe(
          sucess=> console.log("Apagado"),
          error => console.log(error)
        )
      }
     voltar()
     {
       return this.location.back();
     }
    }  
