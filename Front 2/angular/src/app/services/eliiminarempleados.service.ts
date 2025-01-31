import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class EliiminarempleadosService {

  private _httpClient = inject(HttpClient);
  private URL_EMPLEADOS = 'http://localhost:9000/empleados';

  ascenderCliente(id:string){
    return this._httpClient.delete(this.URL_EMPLEADOS + '/eliminar' + id);
  }

}
