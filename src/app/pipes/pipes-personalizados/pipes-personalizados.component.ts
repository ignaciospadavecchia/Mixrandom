import { Component } from '@angular/core';
import { AlmacenamientoArchivosPipe } from '../almacenamiento-archivos.pipe';
import { CommonModule } from '@angular/common';
import { AlmacenamientoArchivosMultiplePipe } from '../almacenamiento-archivos-multiple.pipe';
import { DistanciasPipe } from '../distancias.pipe';

@Component({
  selector: 'app-pipes-personalizados',
  imports: [AlmacenamientoArchivosPipe, AlmacenamientoArchivosMultiplePipe,
    DistanciasPipe, CommonModule],
  templateUrl: './pipes-personalizados.component.html',
  styleUrl: './pipes-personalizados.component.css'
})
export class PipesPersonalizadosComponent {
  archivos = [
    {
      nombre: 'Archivo 1',
      size: 5000
    },
    {
      nombre: 'Archivo 2',
      size: 10000
    },
    {
      nombre: 'Archivo 3',
      size: 20000
    },
    {
      nombre: 'Archivo 4',
      size: 30000
    }
  ];

  longitudes = [
    {
      lugar: 'Sadar',
      longitud: 150
    },
    {
      lugar: 'Plaza del Castillo',
      longitud: 200
    }
  ];

}
