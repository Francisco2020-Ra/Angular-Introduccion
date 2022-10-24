import { Component } from '@angular/core';
import { Personaje } from '../interfaz/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {nombre:"Goku", poder: 30000},
    {nombre: "Vegeta", poder: 10000}
  ]

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  }

  agregarNuevoPersonaje(nuevo: Personaje){
    this.personajes.push(nuevo);

  }

}
