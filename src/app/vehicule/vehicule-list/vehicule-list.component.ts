import { Component, OnInit } from '@angular/core';
import { VehiculeService } from "./../vehicule.service";
import { Vehicule } from '../vehicule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {
  vehiculeList!:Vehicule[];
  constructor(private vehiculeService:VehiculeService,private router:Router){}

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

  goToDetail(vehicule:Vehicule){
    this.router.navigate(['/vehicule/',vehicule.id])
  }

}
