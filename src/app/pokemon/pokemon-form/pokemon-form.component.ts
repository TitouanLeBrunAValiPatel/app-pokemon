import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: [
      './pokemon-form.component.css'
  ]
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon; // pour pouvoir avoir acces au formlaire il faut avoir un pokemon en entrer
  type: string[];
  isAddForm: boolean;


  constructor(private pokemonService: PokemonService, private router:Router) { }

  ngOnInit(): void {
    //pokemontypelist
    this.type = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add'); // je met à true seulement si l'url contient add
  }

  // METHODES 
  hasType(type: string): boolean{
    return this.pokemon.types.includes(type); // est cd que le pokemon choisi a le type mis en parametre (includes renvoie true ou false en js) 

  }

  selectType($event: Event, type: string){ // event savoir si c'est cocher ou decocher et type savoir qu'est ce qui a ete decocher ou cocher
    const isChecked = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type); // si on a cocher on rajoute
    }
    else{
      const index = this.pokemon.types.indexOf(type); // si on a decocher un type (on recupere l'index du type dans le pokemon)
      this.pokemon.types.splice(index, 1); // la on retire une ligne en commençant par l'index du type (autrement on retire juste le type)
    }
  }

  isTypesValid(type: string): boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)){ // s'il n'a qu'un type (le pokemon) on lui bloque la checkbox
      return false; 

    }
    if(this.pokemon.types.length > 2 && !this.hasType(type)){ // s'il a 3 type ou plus de cocher on bloque les autres checkbox (!hastype) et on laisse la possibilité de decocher celle cocher 
      return false
    }

     
    return true 
  }

  onSubmit(){
    if(this.isAddForm) // dans le cas de la creation d'un pokemon 
    {

      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((pokemon: Pokemon) => {
        this.router.navigate(['/pokemon', pokemon.id])
    });
    }else{

      // console.log("le formulaire a ete soumit ");
      this.pokemonService.updatePokemon(this.pokemon) // permet de faire l'edition des pokemons 
        .subscribe(() => {
            this.router.navigate(['/pokemon', this.pokemon.id])
        });
      // this.router.navigate(['/pokemon', this.pokemon.id])
    }
  }


}
