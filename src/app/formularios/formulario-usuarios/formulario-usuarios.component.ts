import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IUsuario } from '../../interfaces/usuario.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-usuarios',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-usuarios.component.html',
  styleUrl: './formulario-usuarios.component.css'
})
export class FormularioUsuariosComponent {
  @ViewChild('formulario') miFormulario!: NgForm;

  generos = [
    { value: 'M', display: 'Mujer' },
    { value: 'H', display: 'Hombre' }
  ];

  roles = [
    { value: 'admin', display: 'Administrador' },
    { value: 'guest', display: 'Invitado' },
    { value: 'custom', display: 'Otro' }
  ];

  aficiones = [
    { value: 'game', display: 'Gaming' },
    { value: 'tech', display: 'Tecnología' },
    { value: 'life', display: 'Lifestyle' },
    { value: 'sport', display: 'Deportes' }
  ];

  // Cuando declaramos una propiedad o un objeto TypeScript nos obliga a darle un valor inicial
  // Como voy a tener que emplear un usuario, tengo que iniciar el objeto dando un valor a cada
  // una de sus propiedades.
  // Primera opción: Darle un valor cuando se declara
  // user: IUsuario = {
  //   nombre: '',
  //   edad: 0,
  //   genero: this.generos[0].value, // Mujer por defecto
  //   rol: this.roles[1].value, // Invitado por defecto
  //   activo: false,
  //   aficiones: [this.aficiones[1].value] // Tecnología por defecto
  // };
  // Segunda opción: Declarar el objeto y darle un valor en el constructor
  // Como el constructor se ejecuta al iniciarse el componente, TypeScript lo acepta
  // user: IUser;
  // Tercera opción
  // Ordenarle a TypeScript que lo deje en mis manos y que se olvide de la restricción
  // Ese imperativo se consigue con !
  // Aún y todo, debo inicializar el objeto. Lo puedo hacer desde el evento de carga inicial ngOnInit
  
  usuario:IUsuario;

  constructor() {
    this.usuario = {
      nombre: '',
      edad: 0,
      genero: this.generos[0].value, // Mujer por defecto
      rol: this.roles[1].value, // Invitado por defecto
      activo: false,
      aficiones: [this.aficiones[1].value] // Tecnología por defecto
    };
  }

  ngOnInit() {
    // this.usuario = {
    //   nombre: '',
    //   edad: 0,
    //   genero: this.generos[0].value, // Mujer por defecto
    //   rol: this.roles[1].value, // Invitado por defecto
    //   activo: false,
    //   aficiones: [this.aficiones[1].value] // Tecnología por defecto
    // };
  }

  guardar() {
    console.log(this.miFormulario.value);
    console.log(this.usuario);
    // this.miFormulario.reset();
    this.miFormulario.reset({
      edad: 0,
      rol: this.roles[1].value,
      genero: this.generos[0].value,
      aficiones: [this.aficiones[1].value]
    });
  }

}
