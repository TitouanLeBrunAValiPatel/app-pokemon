import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'pokemons', pathMatch:'full'}, // chemin par defaut 
  {path: '**', component: PageNotFoundComponent} // intercepte toute les routes (la double etoile '**') et donc faire très attention à l'ordre (mettre à la fin)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
