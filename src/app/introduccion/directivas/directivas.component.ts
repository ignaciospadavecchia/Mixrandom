import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  imports: [FormsModule],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  calificacion = 8;
  ventas = 0;
  edad=0;
  color = 'azul';
  ingredientes: string[] = ['Huevos', 'Sal', 'Aceite'];
  imagenes: string[] = [
    'https://www.nicepng.com/png/detail/804-8040064_green-square-png-aqua-green-color.png',
    'https://t4.ftcdn.net/jpg/04/97/46/61/360_F_497466151_xNOUsRtjWIoG1O1zd98UNr2eR7RFamOj.jpg',
    'https://c8.alamy.com/compes/jygt1c/podemos-hacerlo-anciano-jubilado-pop-art-avatar-icono-de-caracter-jygt1c.jpg'
  ];
  otroIngrediente = '';
  otraImagen = '';

  agregarIngrediente() {
    this.ingredientes.push(this.otroIngrediente);
    this.otroIngrediente = '';
  }

  agregarImagen() {
    if (this.otraImagen.trim() !== '') {
      this.imagenes.push(this.otraImagen);
      this.otraImagen = '';
    }
  }
}
