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
  maxDate: Date
  minDate: Date
  

  constructor(
    private fb: FormBuilder,
    private services: UsuariosService,
    private location: Location,
  ) {



    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
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
          console.log("sucesso")
        },
        error => console.log("error")        

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
