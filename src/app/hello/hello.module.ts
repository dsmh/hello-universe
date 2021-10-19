import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { InputsComponent } from './components/inputs/inputs.component';


@NgModule({
  declarations: [
    InputsComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule
  ]
})
export class HelloModule { }
