import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  imports: [CommonModule],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.css'
})
export class AngularPipesComponent {
  nombre = 'Juan Luis ochoa';
  fechaActual = new Date();
  facturacion = 1099898.5454;
  porcentaje = 0.21;
}
