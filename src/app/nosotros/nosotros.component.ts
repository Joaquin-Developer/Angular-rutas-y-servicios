import { Component, OnInit } from '@angular/core';
/* Importo los servicios: */ 
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  // aqui vamos a obtener el array creado en el servicio equipo.
  // primero creamos un array vacio
  equipo: any[] = [];

  constructor(private _servicio: EquipoService) { 

    this.equipo = _servicio.obtenerEquipo();  // obtenemos el array de servicio equipo.

  }

  ngOnInit(): void {
  }

}
