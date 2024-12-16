import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategorias, IRecetas } from '../interfaces/meal.interface';

// @Injectable hace la clase RecetasService un servicio
// Este Injectable hace referencia a que aquel componente que use este servicio deberá inyectarlo
// Un servicio que pretenda acceder a datos debe:
// - importar HttpClient (módulo para emitir peticiones http (get, post, put o delete))
// - importar Observable. Observable está dentro de rxjs (librería de Microsoft)
// que canaliza el resultado de la petición.
// - Inyectar HttpClient en el servicio (private http = inject(HttpClient);)

// IMPORTANTE: CUANDO USAMOS SERVICIOS QUE ACCEDAN A DATOS, TENEMOS QUE IR AL app.config
// E INCLUIR ESTA IMPORTACIÓN:  provideHttpClient()
// UNA VEZ, AUNQUE HAYA 100 SERVICIOS

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private http = inject(HttpClient);
  constructor() {}

  // Métodos que van a consumir los componentes (RecetasComponent)
  getRecetas(categoria: string): Observable<IRecetas> {
    return this.http.get<IRecetas>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`);
  }

  getCategorias(): Observable<ICategorias> {
    return this.http.get<ICategorias>(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
  }
}