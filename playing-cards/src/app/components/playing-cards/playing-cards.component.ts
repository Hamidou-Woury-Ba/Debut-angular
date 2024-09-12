import { Component } from '@angular/core';

@Component({
  selector: 'app-playing-cards',
  standalone: true,
  imports: [PlayingCardsComponent],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent {

  name : string = "My Monster";
  hp : number = 40;
  figureCaption : string = "N°001 Monster";
  attackName : string = "Geo Impact";
  attackStrength : number = 60;
  attackDescription : string = "Lance une attaque de pierre sur l'ennemi";

}
