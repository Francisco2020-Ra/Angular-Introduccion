import { Component, OnInit } from '@angular/core';


interface Personaje{
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nuevo:Personaje ={
    nombre:'Tunks',
    poder: 15000,
  }

  agregar(){

    console.log(this.nuevo)
    

  }


}
