import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // gere les ngif ngfor etc
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';

import { AuthGuard } from '../auth.guard';
const pokemonRoutes: Routes = [
  {path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard] }, // canActive c'est le mode d'authentification et je veux que edit pokemon soit gerer par le guard AuthGuard renvoie true (acces page) ou false 
  {path: 'add/pokemon', component: AddPokemonComponent, canActivate: [AuthGuard] },
  {path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard] },
  {path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard] } // les : dit à angular que c'est un identifiant que le va recupérer 

]

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
  ],
  imports: [ // les IMPORTS sont des class exporter deja 
    CommonModule,
    FormsModule, // faut l'importer à tout les modules qui seront rattaché à ces modules (formulaire edit la description pokemon pour ici)
    RouterModule.forChild(pokemonRoutes) // on import les routes des pokemons (et c'est un enfant de app routing)
  ],
  providers:[ // permet d'avoir le service pokemon que dans le module pokemon (et plus dans toute l'appli)
    PokemonService
  ] // 
})
export class PokemonModule { }
