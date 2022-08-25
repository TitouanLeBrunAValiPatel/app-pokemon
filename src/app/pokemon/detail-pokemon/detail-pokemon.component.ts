import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private router: ActivatedRoute,
     private route:Router,
     private pokemonService: PokemonService) { } // permet d'avoir la route courante (router), permet la redirection (route) 

  ngOnInit(): void { // ne renvoie rien
    const pokemonId: string|null = this.router.snapshot.paramMap.get('id'); // snapshot data a l'instant t , et on cherche à obtenir un id (mis dans l'url dans APP-Routing-module.ts)
    if (pokemonId){
      // this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon)

    }

  }

  // METHODES 

  goToPokemonList(){
    this.route.navigate(['/pokemons']); // permet la redirection sur la page pokemon
  }

  goToEditPokemon(pokemon: Pokemon){
    this.route.navigate(['/edit/pokemon/', pokemon.id])
  }

  deletePokemon(pokemon: Pokemon){
    this.pokemonService.deletePokemonById(pokemon.id)
      .subscribe(() => this.goToPokemonList()); // similaire au navigate
  }


}
