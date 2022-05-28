import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css'],
})
export class EditarEmpleadoComponent implements OnInit {
  formularioEmpleados: FormGroup;
  emID: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private crudService: CrudService,
    public formulario: FormBuilder,
    private ruteador: Router,
  ) {
    this.emID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.emID);

    this.crudService.ObtenerEmpleado(this.emID).subscribe((respuesta) => {
      console.log(respuesta);
      this.formularioEmpleados.setValue({
        nombre: respuesta[0]['nombre'],
        correo: respuesta[0]['correo']
      });
    });

    this.formularioEmpleados=this.formulario.group({
      nombre: [''],
      correo: ['']
    });
  }

  ngOnInit(): void {}

  enviarDatos():any{
    console.log(this.emID);
    console.log(this.formularioEmpleados.value);
    this.crudService.EditarEmpleado(this.emID,this.formularioEmpleados.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-empleado');
    });
  }
}
