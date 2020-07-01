import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsuariosService } from "../usuarios.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-criar-usuario",
  templateUrl: "./criar-usuario.component.html",
  styleUrls: ["./criar-usuario.component.css"],
})
export class CriarUsuarioComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private services: UsuariosService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  form: FormGroup;
  submetido: boolean;

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params["id"]),
        switchMap((id) => this.services.obterUsuarioId(id))
      )
      .subscribe((usuario) => this.AtualizarForm(usuario));

    this.form = this.fb.group({
      id: [null],
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
  onSalvar() {
    this.submetido = true;
    console.log(this.form.value);

   if (this.form.value.id !== null) {


      this.services.atualizar(this.form.value).subscribe(
        (success) => {
          this.location.back();
          console.log("Atualizado");
        },

        (error) => console.log("error "+ this.form.value.id)
      );


    } else {
      if (this.form.valid) {
        this.services.criar(this.form.value).subscribe(
          (success) => {
            this.location.back();
            console.log("salvo");
          },
          (error) => console.log("error")
        );
      }
    }
  
  }
  temErro(field: string) {
    return this.form.get(field).errors;
  }
  onCancel() {
    this.submetido = false;
    this.form.reset();
    console.log("cancelado");
  }
}
