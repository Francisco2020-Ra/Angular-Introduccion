import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";



@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[],
    providers:[],
})
export class ContadorModule{ }