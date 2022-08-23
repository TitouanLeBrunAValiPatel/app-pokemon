import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styles: []
})
export class AppComponent implements OnInit{

  // pokemonList = ['Bulbizarre', 'salameche', 'carapuce'];
  pokemonList: Pokemon [] = POKEMONS; // on dit que pokemon list est un tableau de pokemon et ce tableau est rempli de POKEMONS
  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.table(this.pokemonList);    
  }
  
  
  // METHODES

  selectPokemon(pokemonId: number){
    // const index: number = +(event.target as HTMLInputElement).value // le plus permet de convertir le string en number, le value c'est pour recuperer la valeur saisi

    // const id = +pokemonId;
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == pokemonId); // find permet de trouver le pokemon qui a bon id et non par rapport à l'index, si Pokemon n'est pas defini alors il renvoie undefined
    if (pokemon){

      console.log(`voous avez demandé le pokemon ${pokemon?.name  }` ); // le ? renvoie undefined si pas trouver
      this.pokemonSelected = pokemon;
    }else{
      console.log("pas trouve");
      this.pokemonSelected = pokemon;
    }
  }
}


