import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
})

export class ProfilComponent implements OnInit {

  profil: any = {};
  chargementEnCours: boolean = true;

  constructor(private userService: UserService, private router: Router) {   }

  ngOnInit(): void {
    this.goAccueil();

    this.getInfo();
    setTimeout(() => {
      this.chargementEnCours = false;
    }, 1000);

  }
  async getInfo() {
    this.profil = await this.userService. getUserInfo();
  }

  goAccueil() {
    const token = window.localStorage.getItem('tokenuser');
   if( token == null ){
    this.router.navigate(['/']);
   } else{
    this.router.navigate(['/profil']);
   }
  }
  goEdit(){

    this.router.navigate(['/profiledit']);

  }
  goUpdatePic(){
    this.router.navigate(['/updatepic']);
  }


}
