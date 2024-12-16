import { Component } from '@angular/core';
import { AngularPipesComponent } from "./pipes/angular-pipes/angular-pipes.component";
import { PipesPersonalizadosComponent } from "./pipes/pipes-personalizados/pipes-personalizados.component";
import { RecetasComponent } from "./rest/recetas/recetas.component";
import { ChistesComponent } from "./rest/chistes/chistes.component";
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularBasicos';
}
