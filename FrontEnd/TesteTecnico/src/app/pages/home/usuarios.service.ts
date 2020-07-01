import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Usuario } from "./usuario.model";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {
  protected url: string = "https://localhost:44324/api/usuario";

  constructor(private http: HttpClient) {}

  obterUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url + "obtertodos");
  }
}
