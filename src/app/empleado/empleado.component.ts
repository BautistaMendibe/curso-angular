import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  edad = 18;
  nombre = "Bautista";
  apellido = "Mendibe";

  constructor() { }

  ngOnInit(): void {
  }

  llamarEmpresa(nombreEmpresa : String){

  }

}
