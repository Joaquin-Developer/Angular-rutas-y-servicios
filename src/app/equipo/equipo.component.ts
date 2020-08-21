import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // lo importamos para poder leer una ruta
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  equipo: any[] = [];

  constructor(private ruta:ActivatedRoute, private _servicio: EquipoService) { 
    this.ruta.params.subscribe(params =>{
      console.log(params['id']);
      // capturamos info de nuestro servicio, pero solo de un objeto en particular
      this.equipo = this._servicio.obtenerEquipoPorId(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
