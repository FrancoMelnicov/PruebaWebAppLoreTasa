import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos los componentes
import { FormularioComponent } from "./componentes/formulario/formulario.component";
import { HistorialComponent } from "./componentes/historial/historial.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";

//aqui van las rutas para acceder a los componentes
const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "formulario", component: FormularioComponent},
  {path: "historial", component: HistorialComponent},
  //pagina para la ruta 404
  {path: "**", redirectTo: ""}
];

//exportamos el modulo de rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
