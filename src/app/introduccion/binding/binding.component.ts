import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  nombre = 'Juan Luis';
  n1: number = 2;
  n2 = 3;
  logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png';
  verImagen = true;
  deshabilitarInput = true;
  textoLabel="Introduce nombre";
  texto='';
  nombrePersona='';
  apellidoPersona='';
  
  cambiarNombre() {
    if (this.nombre === 'Juan Luis') {
      this.nombre = 'Pedro';
    } else {
      this.nombre = 'Juan Luis';
    }
  }

  mostrarOcultarImagen() {
    // if (this.verImagen === true) {
    //   this.verImagen = false;
    // } else {
    //   this.verImagen = true;
    // }
    this.verImagen = !this.verImagen;
  }

  habilitarDeshabilitarInput(){
    this.deshabilitarInput=!this.deshabilitarInput;
  }
}
