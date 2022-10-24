import { Component } from '@angular/core';
import { Personaje } from '../interfaz/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {nombre:"Goky", poder: 30000},
    {nombre: "Vegeta", poder: 10000}
  ]

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  }


}
