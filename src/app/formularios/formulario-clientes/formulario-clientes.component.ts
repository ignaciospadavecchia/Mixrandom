import { Component } from '@angular/core';
import { ICliente } from '../../interfaces/cliente.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-clientes',
  imports: [FormsModule],
  templateUrl: './formulario-clientes.component.html',
  styleUrl: './formulario-clientes.component.css'
})
export class FormularioClientesComponent {

  categorias = [
    { value: 'n', display: 'Normal' },
    { value: 'p', display: 'Preferente' },
    { value: 'v', display: 'VIP' }
  ];

  cliente:ICliente;

  constructor(){
    this.cliente = {
        nombre: '',
        categoria: this.categorias[0].value,
        email: '',
        facturacionAnual: 0,
        localidad: '',
        moroso: false
    }
  }

  guardar() {
    console.log(this.cliente);
  }
}
