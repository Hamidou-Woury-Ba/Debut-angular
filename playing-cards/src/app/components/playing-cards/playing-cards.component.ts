import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-playing-cards',
  standalone: true,
  imports: [PlayingCardsComponent,MatIconModule],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent {

}
