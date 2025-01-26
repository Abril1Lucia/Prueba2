import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpleadosCrear } from '../interfaces/empleados-crear';

@Injectable({
  providedIn: 'root'
})
export class ActualizarempleadosService {

  private _httpClient = inject(HttpClient);
  private URL_EMPLEADOS = 'http://localhost:9000/empleados';

  putEmpleado(empleadoActualizado:EmpleadosCrear, id:string){
    // para actualizar debemos pasar el body y el id del producto a actualizar
    return this._httpClient.put(this.URL_EMPLEADOS + '/actualizar' + id, empleadoActualizado);
  }


  // putEmpleado(empleadoActualizado: EmpleadosCrear) {
  //   return this._httpClient.put(`${this.URL_EMPLEADOS}/${empleadoActualizado.codigo}`, empleadoActualizado);
  // }

}
