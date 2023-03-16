import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeListComponent } from './vehicule-list/vehicule-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { VehiculeFormComponent } from './vehicule-form/vehicule-form.component';
import { FormsModule } from "@angular/forms";
import { EditeVehiculeComponent } from './edite-vehicule/edite-vehicule.component'

const VehiculeRoutes: Routes = [
  {path:"vehicules", component: VehiculeListComponent},
];

@NgModule({
  declarations: [
    VehiculeListComponent,
    AddVehiculeComponent,
    VehiculeFormComponent,
    EditeVehiculeComponent
  ],
  imports: [
  CommonModule,
    FormsModule,
    RouterModule.forChild(VehiculeRoutes)
  ],
  providers:[VehiculeService]
})
export class VehiculeModule { }
