import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2>Editer {{pokemon?.name }} </h2><!-- le ? sert à ne rien afficher si c'est undefined -->
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" alt="">
    </p>
  
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  
  
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id'); // on recupere la valeur de l'url
    if(pokemonId){
    //  this.pokemon = this.pokemonService.getPokemonById(+pokemonId); // on la met dans la methodes le + le transforme en un number
    this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon)
  }

  }

}
