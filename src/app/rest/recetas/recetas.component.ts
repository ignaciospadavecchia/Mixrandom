import { Component, inject } from '@angular/core';
import { ICategorias, IRecetas } from '../../interfaces/meal.interface';
import { RecetasService } from '../../services/recetas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recetas',
  imports: [FormsModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {
  recetario: IRecetas = {
    meals: []
  };
  mostrarError = false;
  categoriaSeleccionada: string = '';
  categorias: ICategorias = {
    meals: []
  };

  private recetasService = inject(RecetasService);
  constructor() {}
  // Pasos:
  // Componente: 
  // Inyectar el servicio (private recetasService = inject(RecetasService)
  // Llamar al método getRecetas o getCategorias del servicio, suscribirse a los cambios
  // y recibir la información en un json.
  // Una vez recibida, la pasamos a una propiedad del componente que será la que utilicemos en el html para ver los datos

  // Al iniciarse el componente (ngOnInit) ejecutamos un método (getCategorias)
  // para conseguir las categorías que aparecerán en la lista desplegable
  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    // Ahora el componente utiliza el servicio para traer las categorías
    // Lo hace llamando a getCategorias
    // subscribe hace que la llamada al servicio espere un resultado (subscribe)
    // Esa suscripción puede ser exitosa o no
    // Si es exitosa se ejecuta el next. next vuelca en un objeto (data) el 
    // json con toda la información
    // Si no es exitosa se ejecuta el error. Podemos aprovechar este error
    // para sacar un mensaje
    // Finalmente, el complete (opcional) permite ejecutar algo cuando 
    // la petición existosa termina
    this.recetasService.getCategorias().subscribe({
      next: (data: ICategorias) => {
        this.categorias = data;

        this.mostrarError = false;
      },
      error: (err: any) => (this.mostrarError = true),
      complete: () => console.log('ok')
    });
  }

  getRecetas() {
    this.recetasService.getRecetas(this.categoriaSeleccionada).subscribe({
      next: (data: IRecetas) => {
        console.log(data);
        this.recetario = data;

        this.mostrarError = false;
      },
      error: (err: any) => (this.mostrarError = true),
      complete: () => console.log('ok')
    });
  }
}
