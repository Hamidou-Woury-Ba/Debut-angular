import { Component } from '@angular/core';
import { PlayingCardsComponent } from "./components/playing-cards/playing-cards.component";

@Component({
  selector: 'app-root', // c'est le nom de la balise HTML qui sera utilisée pour afficher le composant
  standalone: true, // le composant ne contient pas de template HTML (il n'est pas affiché)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardsComponent],
})
export class AppComponent {
}
