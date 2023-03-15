import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeListComponent } from './vehicule-list/vehicule-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

const VehiculeRoutes: Routes = [
  {path:"vehicules", component: VehiculeListComponent},
];

@NgModule({
  declarations: [
    VehiculeListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(VehiculeRoutes)
  ],
  providers:[VehiculeService]
})
export class VehiculeModule { }
