import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup} from "@angular/forms"
import { EmpleadosCrear } from '../../interfaces/empleados-crear';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CrearempleadosService } from '../../services/crearempleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empleados',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './crear-empleados.component.html',
  styleUrl: './crear-empleados.component.css'
})
export class CrearEmpleadosComponent {

  _toastrService = inject(ToastrService)
_UserService = inject(CrearempleadosService)
_Router = inject(Router)


  formularioRegistro = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    apellido1: new FormControl(''),
    apellido2: new FormControl(''),
    codigo_departamento: new FormControl(''),
  })

  handleSubmit(){
    const codigo = this.formularioRegistro.value.codigo 
    const nombre = this.formularioRegistro.value.nombre
    const apellido1 = this.formularioRegistro.value.apellido1
    const apellido2 = this.formularioRegistro.value.apellido2
    const codigo_departamento = this.formularioRegistro.value.codigo_departamento


    let nuevoUsuario: EmpleadosCrear | null = null;

    
    if (typeof codigo === 'string' && typeof nombre === 'string' && typeof apellido1 === 'string' && typeof apellido2 === 'string' && typeof codigo_departamento === 'string')
       {

      nuevoUsuario = {
        codigo,
    nombre,
    apellido1,
    apellido2,
    codigo_departamento
      }


    }

    if (nuevoUsuario) {

      this._UserService.postUsuarios(nuevoUsuario).subscribe({

        next: (res: any) => {

          console.log(res)
          if (res) {
            this._toastrService.success('Usuario creado con exito')
            this._Router.navigate(['/login'])
          }


        }


      })

    }
    
  }



  
}
