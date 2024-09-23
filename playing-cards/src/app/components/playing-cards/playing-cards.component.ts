import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../model/monster.model';

@Component({
  selector: 'app-playing-cards',
  standalone: true,
  imports: [PlayingCardsComponent],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent {

  /*
  // @Input : permet de déclarer une propriété de la classe qui sera utilisée dans le template du composant parent
  @Input({
    // required: true, // la propriété est obligatoire
    alias : "my-monster", // alias de la propriété dans le template du composant parent
    transform : (value : Monster) => {
      value.hp = value.hp / 2; // on divise par 2 les points de vie du monstre
      return value; // on retourne la valeur transformée
    } // fonction de transformation de la valeur de la propriété
  }) 

  monster : Monter = new Monster(); // propriété de la classe de type Monster
    */
  
  // Utilisation de la directive InputSignal pour déclarer une propriété de la classe qui sera utilisée dans le template du composant parent
  monster : InputSignal<Monster> = input(new Monster(), {
    alias : "my-monster", // alias de la propriété dans le template du composant parent
    transform : (value : Monster) => {
      value.hp = value.hp / 2; // on divise par 2 les points de vie du monstre
      return value; // on retourne la valeur transformée
    } // fonction de transformation de la valeur de la propri
  });
}
