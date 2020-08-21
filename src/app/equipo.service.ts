import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: "Joaquín Parrilla",
      especialidad: "Java",
      descripcion: "Desarrolla en Java desde el año 2017. Tambien tiene conocimentos" +
      " en .NET, KOtlin, y Angular en el frontend."
    },
    {
      nombre: "Maria Perez",
      especialidad: "C#",
      descripcion: "Desarrolla con C#, Visual C++ y Visual Basic .NET desde el año 2008. Es una senior .NET Developer"
    }
  ];

  constructor() { 
    // probamos el servicio
    console.log("Si vemos este mensaje, significa que nuestro servicio fuciona!");
  }
  // exportamos el array de objetos creado arriba-
  obtenerEquipo() {
    return this.equipo;
  }

  obtenerEquipoPorId(index){
    return this.equipo[index];
  }

}
