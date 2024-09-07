import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingCardsComponent } from './playing-cards.component';

describe('PlayingCardsComponent', () => {
  let component: PlayingCardsComponent;
  let fixture: ComponentFixture<PlayingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayingCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
