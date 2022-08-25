import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="action-pokemon"> <!--routerlink permet les redirections egale à celle des methodes goToPokemonList .. -->
        Retourner à l' accueil
      </a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {


}
