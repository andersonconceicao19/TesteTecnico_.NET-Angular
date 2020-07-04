import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from './../../../environments/environment';
import { Usuario } from "./usuario.model";
import { take, delay } from 'rxjs/operators';

var opt = { headers: new HttpHeaders({"content-type": "application/json"})}

@Injectable({
  providedIn: "root",
})


export class UsuariosService {


  private readonly url = `${ environment.url }usuario`;

  constructor(private http: HttpClient) {}

  obterUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url)
  }
  obterUsuarioId(id):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`).pipe(take(1))
  }

  criar(usuario: Usuario): Observable<Usuario>
  {   
    console.log(usuario);
    
    return this.http.post<Usuario>(`${this.url}/adicionar`, usuario, opt).pipe(take(1))
  }

  atualizar(usuario: Usuario): Observable<Usuario>
  {
    return this.http.put<Usuario>(`${this.url}/atualizar`, usuario, opt).pipe(take(1))
  }
  Apagar(id): Observable<Usuario>
  {
    return this.http.delete<Usuario>(`${this.url}/Excluir/${id}`,opt).pipe(take(1))
  }
}
