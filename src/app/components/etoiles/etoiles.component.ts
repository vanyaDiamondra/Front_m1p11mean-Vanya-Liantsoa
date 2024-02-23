import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PreferenceService  } from '../../services/preference.service';
@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.css']
})
export class EtoilesComponent {

  @Input() score: number = 0;
  @Output() scoreChange: EventEmitter<number> = new EventEmitter<number>();
  etoilesArray: number[] = [];
  @Input() type: number = 0;
  @Input() id:string='';
  data = { token: '', note: 0};


  constructor(private  preferenceService:  PreferenceService) { }

  ngOnInit() {
    this.etoilesArray = Array.from({ length: 5 }, (_, index) => index + 1);
  }

  onClickEtoile(nouveauScore: number): void {
    this.score = nouveauScore;
    this.scoreChange.emit(this.score);
    //const storage=window.localStorage.getItem('usertoken');
    console.log(window.localStorage.getItem('tokenuser'));

    this.data.token=window.localStorage.getItem('tokenuser')||'';
    this.data.note=nouveauScore;
    if (this.type === 0) {
      this.preferenceService.noterService(this.data,this.id).subscribe(
        response => {
          console.log('Server Response:', response);
        },
        error => {
          console.error('Error:', error.error);
        }
      );
    } else if (this.type === 1) {
      this.preferenceService.noterEmp(this.data,this.id).subscribe(
        response => {
          console.log('Server Response:', response);
        },
        error => {
          console.error('Error:', error.error);
        }
      );
    }
  }
}
