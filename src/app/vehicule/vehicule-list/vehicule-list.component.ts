import { Component, OnInit } from '@angular/core';
import { VehiculeService } from "./../vehicule.service";
import { Vehicule } from '../vehicule';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {
  vehiculeList!:Vehicule[];
  constructor(private vehiculeService:VehiculeService){}

  ngOnInit(): void {
    this.handleVehiculeList()
  }

  handleVehiculeList(){
    this.vehiculeService.getVehiculeList().subscribe(
      (vehicules:Vehicule[])=>{
        this.vehiculeList = vehicules;
      }
    )
  }

}
