import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Departamento } from '../../interfaces/departamento';
import {ReactiveFormsModule, FormControl, FormGroup} from "@angular/forms"
import { DepartamentoService } from '../../services/departamento.service';
import { RouterLink } from '@angular/router';
import { CrearempleadosService } from '../../services/crearempleados.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  _dataService = inject(DepartamentoService);
  _servicio = inject(CrearempleadosService)
  allDepartamentos: Departamento[] = [];

  codigo: string = '';
  nombre: string = '';
  showDiv: boolean = false;
  editMode: boolean = false;  
  editProductId: string | undefined | null= null;


  obtenerEmpleados() {
    this._servicio.showEmpleados().subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.allDepartamentos = res;
      },
      error: (error) => {
        console.error('Hubo un error', error);
      }
    });
  }



   obtenerDatos() {
    this._dataService.showDepartamento().subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.allDepartamentos = res;
        // console.log(this.allProducts);
      },
      error: (error) => {
        console.error('Hubo un error', error);
      }
    });
  }


  crearDatos(){
    if (this.codigo === '' || this.nombre === '') {
      alert('Ingrese todos los campos');
    } else{

      const NuevoEmpleado: Departamento = {
        codigo: this.codigo,
        nombre: this.nombre,
      };


      this._dataService.postDepartamento(NuevoEmpleado).subscribe({
        next: (res: any) => {
          if (res) {
            console.log('res', res);
            this.obtenerDatos();
          } else {
            console.error('Hubo un error');
          }
        },
        error: (error) => {
          console.error('Hubo un error', error);
        }
      });

  }

}



  //modificar productos
  identificarId(id: string | undefined ) {
    this.editProductId = id;
    this.editMode = true;
    this.showDiv = true;
    console.log(this.editProductId);
  }



  

  modificarDepartamento() {
    console.log('Entré');
    console.log(this.editProductId, this.codigo, this.nombre);

    if (!this.codigo || !this.nombre) {
        alert('Ingrese todos los campos');
    } else if (this.editProductId) {
        const departamentooActualizado: Departamento = {
          codigo: this.codigo,
          nombre: this.nombre,
        };


        
        this._dataService.putDepartamento(this.editProductId).subscribe({
            next: (res: any) => {
                if (res) {
                    console.log('res', res);
                    this.obtenerDatos();
                    this.toggleDiv();
                } else {
                    console.error('Hubo un error');
                }
            },
            error: (error) => {
                console.error('Hubo un error', error);
            }
        });
    }
}




borrarProducto(id: string | undefined) {
  console.log('Producto a borrar:', id);

  this._dataService.eliminarDepartamento(id).subscribe({
      next: (res: any) => {
          if (res) {
              console.log('res', res);
              this.obtenerDatos();
          } else {
              console.error('Hubo un error');
          }
      },
      error: (err) => {
          console.error('Hubo un error', err);
      }
  });
}


toggleDiv() {
  this.showDiv = !this.showDiv;
  if (!this.showDiv) {
    this.codigo = '';
    this.nombre = '';
    this.showDiv = false;
    this.editMode = false;  
    this.editProductId= null;
  }
}

limpiarCampos() {
  this.codigo === '';
  this.nombre === '';
}

ngOnInit() {
  this.obtenerDatos();

}

}