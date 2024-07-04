import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CorredorService } from '../../services/corredor.service';
import Corredor from '../../models/corredor';

@Component({
  selector: 'app-editar-corredores',
  templateUrl: './editar-corredores.component.html',
  styleUrl: './editar-corredores.component.css'
})
export class EditarCorredoresComponent implements OnInit {

  //Propiedades:
  editarCorredorForm: FormGroup;
  enviado = false;
  corredorSexo: any = [
    'Hombre',
   'Mujer',
   'Otro'
  ];
  corredorData: Corredor[] = [];

  constructor(
    public FormBuilder: FormBuilder,
    private router: Router,
    private corredorService: CorredorService,
    private actRoute: ActivatedRoute
  ){
    this.mainForm();
  }

  ngOnInit(): void {
    this.mainForm()
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getCorredor(id);

    this.editarCorredorForm = this.FormBuilder.group({
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

  //Método para generar el formulario:
  mainForm(){
    this.editarCorredorForm = this.FormBuilder.group({
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
    this.editarCorredorForm.get('sexo').setValue(d,{
      onlySelf:true
    });
  }

  //Getter para acceder a los controles del formulario
  get myForm(){
    return this.editarCorredorForm.controls;
  }

  //Método para buscar al corredor a modificar
  getCorredor(id) {
    this.corredorService.getCorredor(id)
      .subscribe(data => {
        console.log(data)
        this.editarCorredorForm.setValue({
          name: data['name'],
          apellido: data['apellido'],
          correo: data['correo'],
          edad: data['edad'],
          sexo: data['sexo']
        });
      });
  }

  //Método para enviar el formulario
  onSubmit(){
    this.enviado = true;
    if(!this.editarCorredorForm.valid) return false;
    
    if (window.confirm('¿Quiere modificar a este corredor?')) {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.corredorService.actualizarCorredor(id, this.editarCorredorForm.value)
      .subscribe({
        complete: () => {
          this.router.navigate(['/listar-corredor']);
          console.log('Corredor modificado');
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }
}
