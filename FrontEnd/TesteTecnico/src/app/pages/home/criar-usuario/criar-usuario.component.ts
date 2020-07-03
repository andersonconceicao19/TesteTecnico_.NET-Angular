import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsuariosService } from "../usuarios.service";
import { Location } from "@angular/common";



@Component({
  selector: "app-criar-usuario",
  templateUrl: "./criar-usuario.component.html",
  styleUrls: ["./criar-usuario.component.css"],
})
export class CriarUsuarioComponent implements OnInit {
  form: FormGroup;
  submetido: boolean;

  constructor(
    private fb: FormBuilder,
    private services: UsuariosService,
    private location: Location,
  ) {
    
  }

  ngOnInit(): void {
    

    this.form = this.fb.group(
      {
        nome: [null,[Validators.required, Validators.maxLength(20)]],
        sobrenome:[null, [Validators.required, Validators.maxLength(50)]] ,
        email: [null, [Validators.email]],
        dataNascimento: [null,[ Validators.required]],
        tipoEscolaridade: [null, [Validators.required]]        
      }
    )
  }

  onSalvar() {
    this.submetido = true;
    console.log(this.form.value);

    if(this.form.valid)
    {
      this.services.criar(this.form.value).subscribe(
        success =>{
          this.location.back();
        },
        error => console.log(error)        

      )      
    }
  }
  temErro(field: string) {
    return this.form.get(field).errors;
  }
  onCancel() {
    this.submetido = false;
    this.location.back()
  }
}
