import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit{

  pokemonList: Pokemon []; // on dit que pokemon list est un tableau de pokemon et ce tableau est rempli de POKEMONS

  constructor(
    private route: Router,
    private pokemonService : PokemonService // permet d'avoir toujours la meme instance 
    ){}    // const service = new PokemonService(); // n'est pas la bonne methodes car elle creer une nouvelle instance 
  
  
  ngOnInit(): void {
    // this.pokemonList = this.pokemonService.getPokemonList();
    this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  // METHODES 

  goToPokemon(pokemon: Pokemon){
    this.route.navigate(['/pokemon', pokemon.id])
  }
  // goToAddPokemon(){
  //   this.route.navigate(['/pokemon/add']);
  // }

}
