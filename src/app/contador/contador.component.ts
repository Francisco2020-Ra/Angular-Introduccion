import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: ` 

    <h3>La base es: {{ base }}</h3>

    <button (click)="acumular( -base)"> -5 </button>

    <span>{{ valor }}</span>

    <button (click)="acumular( base )"> +5</button>
    
    `

})
export class ContadorComponent{

    valor: number = 10;
    base: number = 5;

    acumular(numero: number){
        this.valor += numero;
    }

}