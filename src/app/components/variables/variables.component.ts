import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {
  nombre:string="Temuco";
  nota:string="Amanecer";

  constructor() { }

  cambiar_nombre(){
    this.nombre = "Refrescar localizacion"
  }




}
