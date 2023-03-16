import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicule } from '../vehicule';
import { VehiculeService } from '../vehicule.service';

@Component({
  selector: 'app-vehicule-detail',
  templateUrl: './vehicule-detail.component.html',
  styleUrls: ['./vehicule-detail.component.scss']
})
export class VehiculeDetailComponent implements OnInit {
  vehicule!:Vehicule;

  constructor(private router:Router,private route:ActivatedRoute,private vehiculeService:VehiculeService){

  }

  ngOnInit(): void {
    const vehiculeId:string|null= this.route.snapshot.paramMap.get('id')
    if (vehiculeId) {
      this.vehiculeService.getVehiculeById(+vehiculeId).subscribe(
        (response)=>{
          console.log(response);
          this.vehicule = response;
        }
      )
    }
  }

}
