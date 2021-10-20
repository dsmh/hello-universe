import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HelloRoutingModule } from './hello-routing.module';
import { InputsComponent } from './components/inputs/inputs.component';


@NgModule({
  declarations: [
    InputsComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule,
    FormsModule
  ]
})
export class HelloModule { }
