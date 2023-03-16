import { Component, Input } from '@angular/core';
import { Vehicule } from "./../vehicule";
import { VehiculeService } from '../vehicule.service';

@Component({
  selector: 'app-vehicule-form',
  templateUrl: './vehicule-form.component.html',
  styleUrls: ['./vehicule-form.component.scss']
})
export class VehiculeFormComponent {

  @Input() vehicule!:Vehicule;
  constructor(private vehiculeService:VehiculeService){
  }

  onSubmit(){
    this.vehiculeService.addVehiculeList(this.vehicule).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }

}
