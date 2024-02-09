import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.css']
})
export class EtoilesComponent {
  
  @Input() score: number = 0;
  @Output() scoreChange: EventEmitter<number> = new EventEmitter<number>();
  etoilesArray: number[] = [];

  constructor() { }

  ngOnInit() {
    this.etoilesArray = Array.from({ length: 5 }, (_, index) => index + 1);
  }

  onClickEtoile(nouveauScore: number): void {
    this.score = nouveauScore;
    this.scoreChange.emit(this.score);
  }
}
