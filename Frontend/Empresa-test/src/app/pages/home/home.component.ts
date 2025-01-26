import { Component, inject } from '@angular/core';
import { ActualizarempleadosService } from '../../services/actualizarempleados.service';
import { CrearempleadosService } from '../../services/crearempleados.service';
import { EliiminarempleadosService } from '../../services/eliiminarempleados.service';
import { FormsModule } from '@angular/forms';
import { EmpleadosCrear } from '../../interfaces/empleados-crear';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  _dataService = inject(CrearempleadosService);
  _deleteService = inject(EliiminarempleadosService)
  _updateService = inject(ActualizarempleadosService)
  allProducts: EmpleadosCrear[] = [];

  codigo: string = '';
  nombre: string = '';
  apellido1: string = '';
  apellido2: string = '';
  codigo_departamento: string = '';
  showDiv: boolean = false;
  editMode: boolean = false;  
  editProductId: string | undefined | null= null;




   obtenerDatos() {
    this._dataService.showEmpleados().subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.allProducts = res;
        // console.log(this.allProducts);
      },
      error: (error) => {
        console.error('Hubo un error', error);
      }
    });
  }

  crearDatos(){
    if (this.codigo === '' || this.nombre === '' || this.apellido1 === '' || this.apellido2 === '' || this.codigo_departamento === '') {
      alert('Ingrese todos los campos');
    } else{

      const NuevoEmpleado: EmpleadosCrear = {
        codigo: this.codigo,
        nombre: this.nombre,
        apellido1: this.apellido1,
        apellido2: this.apellido2,
        codigo_departamento: this.codigo_departamento,
      };


      this._dataService.postUsuarios(NuevoEmpleado).subscribe({
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



  

  modificarProducto() {
    console.log('Entré');
    console.log(this.editProductId, this.codigo, this.nombre, this.apellido1, this.apellido2, this.codigo_departamento );

    if (!this.codigo || !this.nombre || this.apellido1 || this.apellido2 || this.codigo_departamento) {
        alert('Ingrese todos los campos');
    } else if (this.editProductId) {
        const empleadoActualizado: EmpleadosCrear = {
          codigo: this.codigo,
          nombre: this.nombre,
          apellido1: this.apellido1,
          apellido2: this.apellido2,
          codigo_departamento: this.codigo_departamento
        };


        
        this._updateService.putEmpleado(empleadoActualizado, this.editProductId).subscribe({
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




borrarProducto(id: string) {
  console.log('Producto a borrar:', id);

  this._deleteService.ascenderCliente(id).subscribe({
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
    this.apellido1 = '';
    this.apellido2 = '';
    this.codigo_departamento = '';
    this.showDiv = false;
    this.editMode = false;  
    this.editProductId= null;
  }
}

limpiarCampos() {
  this.codigo === '';
  this.nombre === '';
  this.apellido1 === '';
  this.apellido2 === '';
  this.codigo_departamento === '';
}

ngOnInit() {
  this.obtenerDatos();

}

}
