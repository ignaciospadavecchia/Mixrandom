import { Component, inject } from '@angular/core';
import { IChiste } from '../../interfaces/chiste.interface';
import { ChistesService } from '../../services/chistes.service';

@Component({
  selector: 'app-chistes',
  imports: [],
  templateUrl: './chistes.component.html',
  styleUrl: './chistes.component.css'
})
export class ChistesComponent {
  chiste: IChiste = {
    categories:[],
    created_at:'',
    icon_url:'',
    id:'',
    updated_at:'',
    value:'',
    url:''
  };

  mostrarError = false;
  private chistesService = inject(ChistesService);

  constructor() {}
  ngOnInit(): void {
    this.getChiste();
  }

  getChiste() {
      this.chistesService.getChiste().subscribe({
        next: (data: IChiste) => {
          this.chiste = data;
  
          this.mostrarError = false;
        },
        error: (err: any) => (this.mostrarError = true),
        complete: () => console.log('ok')
      });
    }
}
