import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, Subscriber, switchMap, TeardownLogic } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {

  // PROPRIETE 

  searchTerms = new Subject<string>(); // permet de stocker les recherche successive {ex: ... "a".. "ab .. "abc" .. "ab"..} 
  
  // on veut la pokemonList(a) .. pokemonList(ab) .. pokemonList(abc) .. pokemonList(ab) ...
  pokemons$ = new Observable<Pokemon[]>;

  constructor(
    private route: Router,
    private pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // {ex: ... "a".. "ab .. "abc" . "ab"..}
      debounceTime(300), // tps d'attente entre chaque recherche 
      // {ex: ... "a".. .. "abc" . ... "abc"}
      distinctUntilChanged(), // att qu'il est un changement (abc abc pas de changement donc pas de demande au serveur)
      // {ex: ... "a".. .. "abc" . ...}
      //map((term) => this.pokemonService.searchPokemonList(term))
     // {ex: ... Observable<"a">.. .. Observable<"abc"> . ...} nous on veut pas un observable

     switchMap((term) => this.pokemonService.searchPokemonList(term))
      // {ex: ... pokemonList(a).. .. pokemonList(abc) . ...}
    );
  }

  // METHODES 

  search(term: string){
    this.searchTerms.next(term);
  }

  goToDetail(pokemon:Pokemon)
  {

    const link = ['/pokemon', pokemon.id];
    this.route.navigate(link)
  }

}
