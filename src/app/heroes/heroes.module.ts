import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';




@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent,
    ],
    exports:[
        HeroeComponent,
        ListadoComponent   
    ],
    imports:[ CommonModule ],
    providers:[],
})
export class HeroesModule{

}