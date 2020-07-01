import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { UsuariosService } from "../usuarios.service";
import { switchMap, map } from "rxjs/operators";

@Component({
  selector: "app-editar-usuario",
  templateUrl: "./editar-usuario.component.html",
  styleUrls: ["./editar-usuario.component.css"],
})
export class EditarUsuarioComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private services: UsuariosService,
    private location: Location,
    private route: ActivatedRoute
  ) {}
  form: FormGroup;
  submetido: boolean;
  //
  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params["id"]),
        switchMap((id) => this.services.obterUsuarioId(id))
      )
      .subscribe((usuario) => this.AtualizarForm(usuario));

    this.form = this.fb.group({
      id: [],
      nome: [null, [Validators.required, Validators.maxLength(20)]],
      sobrenome: [null, [Validators.required, Validators.maxLength(50)]],
      email: [null, [Validators.email]],
      dataNascimento: [null, [Validators.required]],
      escolaridade: [null, [Validators.required]],
    });
  }
  AtualizarForm(usuario) {
    this.form.patchValue({
      id: usuario.id,
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
      dataNascimento: usuario.dataNascimento,
      escolaridade: usuario.escolaridade,
    });
  }
  temErro(field: string) {
    return this.form.get(field).errors;
  }
  onSalvar() {
    this.submetido = true;
    console.log(this.form.value);
    if (this.form.value.id !== null) {
      this.services.atualizar(this.form.value).subscribe(
        (success) => {
          this.location.back();
        },

        (error) => console.log("error ")
      );
    }
  }
  onCancel() {
    this.submetido = false;
    this.form.reset();
    console.log("cancelado");
  }
}
