import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaz/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personajes: Personaje[] = []
  @Input() nuevo!: Personaje;
  
  agregar() {
    console.log(this.nuevo)
    this.personajes.push(this.nuevo);

    this.nuevo = { nombre: '', poder: 0 };
  }
}
