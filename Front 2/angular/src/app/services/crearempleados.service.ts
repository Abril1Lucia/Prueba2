import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmpleadosCrear } from '../interfaces/empleados-crear';

@Injectable({
  providedIn: 'root'
})
export class CrearempleadosService {

  private _httpClient = inject(HttpClient);

  private URL_EMPLEADOS  = 'http://localhost:9000/empleados';
  
  postUsuarios(Empleados : EmpleadosCrear){
  
    return this._httpClient.post( this.URL_EMPLEADOS  + '/create', Empleados );
  }
  
  showEmpleados(){
    return this._httpClient.get( this.URL_EMPLEADOS  + '/show')
  }

  ascenderCliente(id:string){
    return this._httpClient.delete(this.URL_EMPLEADOS + '/eliminar' + id);
  }
  
  putEmpleado(empleadoActualizado:EmpleadosCrear, id:string){
    // para actualizar debemos pasar el body y el id del producto a actualizar
    return this._httpClient.put(this.URL_EMPLEADOS + '/actualizar' + id, empleadoActualizado);
  }
}
