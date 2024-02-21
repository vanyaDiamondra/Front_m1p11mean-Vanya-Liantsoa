import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user:any;
  userToken = window.localStorage.getItem('tokenuser');
  clickNotif = false;
  private seeProfilAppele = false;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
      this.seeProfil();
  }

  toggleNotif() {
    this.clickNotif = !this.clickNotif;
  }

  async seeProfil() {
    // try {
    //   const userToken = window.localStorage.getItem('tokenuser');
    //   this.user = await this.userService.seeProfil(userToken);

    //   if (this.user.status === "401") {
    //     Swal.fire({
    //       title: 'Oops',
    //       text: this.user.message,
    //       icon: 'error',
    //       width: '600px',
    //       confirmButtonText: 'Ok',
    //       confirmButtonColor: '#FFB0B0',
    //     }).then((result) => {});

    //     this.router.navigate(['/']);
    //   }
    // } catch (error) {
    //   console.error('Erreur lors de la récupération du profil :', error);
    // }
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
