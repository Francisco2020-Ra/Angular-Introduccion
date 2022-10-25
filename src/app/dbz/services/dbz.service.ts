import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Personaje } from '../interfaz/dbz.interface';


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        { nombre: "Goku", poder: 30000 },
        { nombre: "Vegeta", poder: 10000 }
    ]

    get personajes(): Personaje[]{
        return [...this._personajes]
    }

    agregarNuevoPersonaje(nuevo: Personaje) {
        this._personajes.push(nuevo);
    }
}