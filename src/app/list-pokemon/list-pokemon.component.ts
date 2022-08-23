import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent{

  pokemonList: Pokemon [] = POKEMONS; // on dit que pokemon list est un tableau de pokemon et ce tableau est rempli de POKEMONS

}
