import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaz/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo!: Personaje;
  @Output() nuevoPersonaje = new EventEmitter<Personaje>();
  
  agregar() {
    console.log(this.nuevo)
    this.nuevoPersonaje.emit(this.nuevo);    
    this.nuevo = { nombre: '', poder: 0 };

  }

}
