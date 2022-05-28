import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  APIurl: string='http://localhost/empleados/'  
  constructor(private clienteHttp: HttpClient) {}

  AgregarEmpleado(datosEmpleado: Empleado):Observable<any>{
    return this.clienteHttp.post(this.APIurl+"?insertar=1",datosEmpleado);
  } 

  MostrarEmpleados(){
    return this.clienteHttp.get(this.APIurl);
  }

  EliminarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.APIurl+"?borrar="+id);
  } 

  ObtenerEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.APIurl+"?consultar="+id);
  }

  EditarEmpleado(id:any,datosEmpleado: any):Observable<any>{
    return this.clienteHttp.post(this.APIurl+"?actualizar="+id,datosEmpleado);
  } 
}
