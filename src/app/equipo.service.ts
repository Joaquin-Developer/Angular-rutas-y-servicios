import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor() { 
    // probamos el servicio
    console.log("Si vemos este mensaje, significa que nuestro servicio fuciona!");
  }
}
