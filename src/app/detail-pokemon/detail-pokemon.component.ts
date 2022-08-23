import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private router: ActivatedRoute) { } // permet d'avoir la route courante

  ngOnInit(): void { // ne renvoie rien
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.router.snapshot.paramMap.get('id') // snapshot data a l'instant t , et on cherche à obtenir un id (mis dans l'url dans APP-Routing-module.ts)
    if (pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }

  }

}
