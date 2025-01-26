
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmpleadosCrear } from '../interfaces/empleados-crear';

@Injectable({
  providedIn: 'root'
})
export class CrearempleadosService {

  private _httpClient = inject(HttpClient);

  private URL_USERS = 'http://localhost:9000/empleados';
  
  postUsuarios(Empleados : EmpleadosCrear){
  
    return this._httpClient.post( this.URL_USERS + '/create', Empleados );
  }
  
  showEmpleados(){
    return this._httpClient.get( this.URL_USERS + '/show')
  }
}
