import { Component } from '@angular/core';
import { IAmigo } from '../../interfaces/amigo.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-amigos',
  imports: [FormsModule],
  templateUrl: './amigos.component.html',
  styleUrl: './amigos.component.css'
})
export class AmigosComponent {
  // Propiedades de amigos: nombre, ciudad, profesion,edad, aficionFavorita, mejoresAmigos
  // Para definir un tipo de datos que de soporte a un estructura, debemos crear una interface
  misAmigos: IAmigo[] = [
    {
      nombre: 'Juan Luis',
      ciudad: 'Pamplona',
      edad: 50,
      profesion: 'Desarrollador',
      aficionFavorita: 'Deportes',
      mejoresAmigos: true,
      avatar: 'https://robohash.org/necessitatibusetsit.jpg?size=50x50&set=set1',
      debeDinero: false
    }
  ];

  nombre: string = '';
  ciudad = '';
  edad = 0;
  profesion = '';
  aficionFavorita = '';
  mejoresAmigos = false;
  avatar = '';
  debeDinero = false;

  agregarAmigo() {
    const nuevoAmigo: IAmigo = {
      nombre: this.nombre,
      ciudad: this.ciudad,
      edad: this.edad,
      profesion: this.profesion,
      aficionFavorita: this.aficionFavorita,
      mejoresAmigos: this.mejoresAmigos,
      avatar: this.avatar,
      debeDinero: this.debeDinero
    };
    this.misAmigos.push(nuevoAmigo);
    this.nombre = '';
    this.ciudad = '';
    this.edad = 0;
    this.profesion = '';
    this.aficionFavorita = '';
    this.mejoresAmigos = false;
    this.debeDinero = false;
    this.avatar='';
    console.log(this.misAmigos);
  }

  eliminarAmigo(posicion: number) {
    this.misAmigos.splice(posicion, 1);
  }

  eliminarAmigoPorNombre(nombre: string) {
    const posicion = this.misAmigos.findIndex(x=>x.nombre===nombre);
    this.misAmigos.splice(posicion, 1);
  }

  cambiarGradoAmistad(posicion: number) {
    this.misAmigos[posicion].mejoresAmigos = !this.misAmigos[posicion].mejoresAmigos;
  }

  cambiarDebeDinero(posicion: number) {
    this.misAmigos[posicion].debeDinero = !this.misAmigos[posicion].debeDinero;
  }
}
