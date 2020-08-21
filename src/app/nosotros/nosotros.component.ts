import { Component, OnInit } from '@angular/core';
/* Importo los servicios: */ 
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  constructor(private _servicio: EquipoService) { 

  }

  ngOnInit(): void {
  }

}
