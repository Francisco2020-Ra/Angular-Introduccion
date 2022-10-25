import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaz/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo!: Personaje;
  //@Output() nuevoPersonaje = new EventEmitter<Personaje>();
  
  constructor(private dbzService: DbzService){}
  agregar() {
    
    //this.nuevoPersonaje.emit(this.nuevo);   
    this.dbzService.agregarNuevoPersonaje(this.nuevo); 
    this.nuevo = { nombre: '', poder: 0 };

  }

}
