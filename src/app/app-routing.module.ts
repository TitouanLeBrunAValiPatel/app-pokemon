import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const routes: Routes = [
  {path: 'pokemons', component: ListPokemonComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent}, // les : dit à angular que c'est un identifiant que le va recupérer 
  {path: '', redirectTo: 'pokemons', pathMatch:'full'} // chemin par defaut 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
