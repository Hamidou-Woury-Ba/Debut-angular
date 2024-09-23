import { Component } from '@angular/core';
import { PlayingCardsComponent } from "./components/playing-cards/playing-cards.component";
import { Monster } from './model/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root', // c'est le nom de la balise HTML qui sera utilisée pour afficher le composant
  standalone: true, // le composant ne contient pas de template HTML (il n'est pas affiché)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardsComponent, SearchBarComponent], // on importe le composant PlayingCardsComponent pour pouvoir l'utiliser dans le template
})
export class AppComponent {

  monster1! : Monster;
  count : number = 0;
  search = ''

  constructor(){
    this.monster1 = new Monster();
    this.monster1.name = "Dragon";
    this.monster1.hp = 80;
    this.monster1.figureCaption = "N°002 Dragon";
    this.monster1.attackName = "Fire Breath";
    this.monster1.attackStrength = 100;
    this.monster1.attackDescription = "Lance une attaque de feu sur l'ennemi";
  }

  increaseCount(){
    this.count++;
  }

}
