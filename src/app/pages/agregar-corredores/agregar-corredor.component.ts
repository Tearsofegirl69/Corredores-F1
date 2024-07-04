import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CorredorService } from '../../services/corredor.service';

@Component({
  selector: 'app-agregar-corredor',
  templateUrl: './agregar-corredor.component.html',
  styleUrl: './agregar-corredor.component.css'
})
export class AgregarCorredorComponent implements OnInit {

  //Propiedades:
  corredorForm: FormGroup;
  enviado = false;
  corredorSexo: any = [
   'Hombre',
   'Mujer',
   'Otro'
  ];

  constructor(
    public FormBuilder: FormBuilder,
    private router: Router,
    private NgZone: NgZone,
    private CorredorService: CorredorService
  ){
    this.mainForm();
  }

  ngOnInit(): void {
    
  }

  //Método para generar el formulario:
  mainForm(){
    this.corredorForm = this.FormBuilder.group({
      name: ['',[Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._%+-]+.[a-z]{2,3}$'),
      ]],
      edad:['', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]],
      sexo: ['', [Validators.required]],
    });
  }

  //Método para asignar el puesto seleccionado por el usuario
  actualizarSexo(d){
    this.corredorForm.get('sexo').setValue(d,{
      onlySelf:true
    });
  }

  //Getter para acceder a los controles del formulario
  get myForm(){
    return this.corredorForm.controls;
  }

  //Método para enviar el formulario
  onSubmit(){
    this.enviado = true;
    if(!this.corredorForm.valid) return false;
  
    return this.CorredorService.agregarCorredor(this.corredorForm.value)
    .subscribe({
      complete: ()=>{
        console.log('Corredor agregado')
        this.NgZone.run(()=> this.router.navigateByUrl('/listar-corredor'))
      },
      error: (error) => {
        console.log(error);
      }
    })  
  }
}
