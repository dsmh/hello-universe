import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  public nombre: String;
  public apellido: String;
  
  constructor() { 
    this.apellido = "";
    this.nombre = "";
  }

  ngOnInit(): void {
  }

}
