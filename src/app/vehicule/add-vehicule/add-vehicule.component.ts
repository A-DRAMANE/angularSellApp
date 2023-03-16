import { Component, OnInit } from "@angular/core";
import { Vehicule } from "../vehicule";

@Component({
  selector: 'app-add-vehicule',
  template: `
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Nouveau véhicule</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <app-vehicule-form *ngIf="vehicule" [vehicule]="vehicule"></app-vehicule-form>
      </div>
    </div>
</div>
  `,
})
export class AddVehiculeComponent implements OnInit {
 
  vehicule:Vehicule;

  constructor(){
    this.vehicule = new Vehicule();
  }

  ngOnInit(): void {
      
  }
}
