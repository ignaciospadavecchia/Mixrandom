import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChiste } from '../interfaces/chiste.interface';

@Injectable({
  providedIn: 'root'
})
export class ChistesService {
  private http = inject(HttpClient);
  
  constructor() { }

  getChiste(): Observable<IChiste> {
      return this.http.get<IChiste>(`https://api.chucknorris.io/jokes/random`);
  }
}
