import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Departamento } from '../interfaces/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private _httpClient = inject(HttpClient);

  private URL_DEPARTAMENTOS  = 'http://localhost:9000/Departamento';

  
  postDepartamento(Departamento : Departamento){
  
    return this._httpClient.post( this.URL_DEPARTAMENTOS  + '/create', Departamento );
  }

  showDepartamento(){
    return this._httpClient.get( this.URL_DEPARTAMENTOS  + '/show')
  }

  eliminarDepartamento (id: string | undefined) {
    return this._httpClient.delete(`${this.URL_DEPARTAMENTOS}/${id}`);
  }
  
  putDepartamento(id: string | undefined) {
    return this._httpClient.delete(`${this.URL_DEPARTAMENTOS}/${id}`);
  }
}
