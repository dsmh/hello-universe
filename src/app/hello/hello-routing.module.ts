import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputsComponent } from './components/inputs/inputs.component';

const routes: Routes = [
  {
    path: '',
    component: InputsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
