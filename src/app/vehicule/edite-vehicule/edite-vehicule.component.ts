import { Component } from '@angular/core';

@Component({
  selector: 'app-edite-vehicule',
  template: `
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <app-vehicule-form></app-vehicule-form>
      </div>
    </div>
</div>
  `,
})
export class EditeVehiculeComponent {

}
