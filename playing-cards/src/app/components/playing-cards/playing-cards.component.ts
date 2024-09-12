import { Component, Input } from '@angular/core';
import { Monster } from '../../model/monster.model';

@Component({
  selector: 'app-playing-cards',
  standalone: true,
  imports: [PlayingCardsComponent],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent {

  // permet de déclarer une propriété de la classe qui sera utilisée dans le template du composant parent
  @Input({
    // required: true, // la propriété est obligatoire
    alias : "my-monster", // alias de la propriété dans le template du composant parent
    transform : (value : Monster) => {
      value.hp = value.hp / 2; // on divise par 2 les points de vie du monstre
      return value; // on retourne la valeur transformée
    } // fonction de transformation de la valeur de la propriété
  }) 
  monster : Monster = new Monster();
}
