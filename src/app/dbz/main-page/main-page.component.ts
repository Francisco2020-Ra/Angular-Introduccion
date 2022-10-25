import { Component } from '@angular/core';
import { Personaje } from '../interfaz/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  }

  



}
