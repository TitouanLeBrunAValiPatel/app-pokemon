import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'feu';
        break;
      case 'Eau':
        color = 'eau';
        break;
      case 'Plante':
        color = 'plante';
        break;
      case 'Insecte':
        color = 'insecte';
        break;
      case 'Normal':
        color = 'normal';
        break;
      case 'Vol':
        color = 'vol';
        break;
      case 'Poison':
        color = 'poison';
        break;
      case 'Fée':
        color = 'fee';
        break;
      case 'Psy':
        color = 'psy';
        break;
      case 'Electrik':
        color = 'electrik';
        break;
      case 'Combat':
        color = 'combat';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color; // chip permet de faire un rond de couleur 
  }

}
