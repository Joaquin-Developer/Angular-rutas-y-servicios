import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // lo importamos para poder leer una ruta

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
