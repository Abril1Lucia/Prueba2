import { Routes } from '@angular/router';
import { CrearEmpleadosComponent } from './pages/crear-empleados/crear-empleados.component';
import { HomeComponent } from './pages/home/home.component';
import { ActualizarEmpleadosComponent } from './pages/actualizar-empleados/actualizar-empleados.component';
import { DespedirEmpleadosComponent } from './pages/despedir-empleados/despedir-empleados.component';


export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Inicio'},
    {path: 'crear', component: CrearEmpleadosComponent, title: 'crear'},
    {path: 'actualizar', component: ActualizarEmpleadosComponent, title: 'actualizar'},
    {path: 'eliminar', component: DespedirEmpleadosComponent, title: 'eliminar'}

];