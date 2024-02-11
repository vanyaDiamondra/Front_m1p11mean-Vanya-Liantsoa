import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  userToken = window.localStorage.getItem('tokenuser');
  clickNotif = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleNotif() {
    this.clickNotif = !this.clickNotif;
  }

  seeProfil() {
    this.userService.seeProfil();
  }

  goAccueil() {
    const token = window.localStorage.getItem('tokenuser');
   if( token == null ){
    this.router.navigate(['/']);
   } else{
    this.router.navigate(['/accueil']);
   }
  }

}
