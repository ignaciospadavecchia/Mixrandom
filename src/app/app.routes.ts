import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './introduccion/binding/binding.component';
import { DirectivasComponent } from './introduccion/directivas/directivas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularPipesComponent } from './pipes/angular-pipes/angular-pipes.component';
import { PipesPersonalizadosComponent } from './pipes/pipes-personalizados/pipes-personalizados.component';
import { FormularioClientesComponent } from './formularios/formulario-clientes/formulario-clientes.component';
import { FormularioUsuariosComponent } from './formularios/formulario-usuarios/formulario-usuarios.component';
import { AmigosComponent } from './introduccion/amigos/amigos.component';
import { ListaPersonasComponent} from './introduccion/lista-personas/lista-personas.component';
import { RecetasComponent } from './rest/recetas/recetas.component';
import { ChistesComponent } from './rest/chistes/chistes.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'binding', component: BindingComponent },
    { path: 'directivas', component: DirectivasComponent },
    { path: 'pipes-angular', component: AngularPipesComponent },
    { path: 'pipes-personalizados', component: PipesPersonalizadosComponent },
    { path: 'formulario-clientes', component: FormularioClientesComponent},
    { path: 'formulario-usuarios', component: FormularioUsuariosComponent},
    { path: 'lista-amigos', component: AmigosComponent},
    { path: 'lista-personas', component: ListaPersonasComponent},
    { path: 'recetas', component: RecetasComponent},
    { path: 'chistes', component: ChistesComponent},
    { path: '**', component: NotFoundComponent }
  ];    