import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
//import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

 @Injectable(
  //{ // il peut lui meme avoir d'autre dependance 
//   providedIn: 'root' // utiliser la meme instance du pokemon service dans toute l'application 
// } // providedIn de root (racine)
)
export class PokemonService {

  constructor(private http: HttpClient){

  }

// METHODES PRIVEE (evite de repeter du code)

private log(response: any){
  console.table(response);
}

private handleError(error:Error, errorValue: any){
  console.error(error);
  return of(errorValue); // le of permet de faire le async (il emet un flux de l'error value )
}


// METHODES 

getPokemonList() : Observable<Pokemon[]> { // ce n'est plus une constante (sync) qu'on recuperer mais une donne qui peut evoluer (async)
  // return POKEMONS;
  return this.http.get<Pokemon[]>('api/pokemons').pipe(
    tap((pokemonList) => console.table(pokemonList)), // tap est l'quivalent qu'un console.log adapte à un Observable
    catchError((error) => this.handleError(error, []))
  );
}

getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
  //return POKEMONS.find(pokemon => pokemon.id == pokemonId) // pokemon pourrait etre science ou voiture ... , il sert de nom d'objet
  return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
    tap((response) => this.log(response)), // tap est l'quivalent qu'un console.log adapte à un Observable
    catchError((error) => this.handleError(error, undefined))
    );

}



getPokemonTypeList(): string []{
  return ['Plante',
            'Eau',
            'Feu',
            'Insecte',
            'Combat',
            'Electrik',
            'Psy',
            'Vol',
            'Fée',
            'Poison',
            'Normal'
  ];
}

updatePokemon(pokemon: Pokemon): Observable<null>{
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'} )
  };

  return this.http.put('api/pokemons', pokemon, ).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, undefined))
  ) // mettre des info (put)
}


deletePokemonById(pokemonId: number): Observable<null>{

  return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))

  );
}

addPokemon(pokemon: Pokemon): Observable<Pokemon>{
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'} )
  };

  return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe( // cette methodes retour un objet de type pokemon
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
  ) // similaire a insert 
}


searchPokemonList(term: string) : Observable<Pokemon[]>{
// si ma recherche est inferieur à 2 letter
  if(term.length < 2){
    return of ([]);
  }
  return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, []))
  );


}

}
