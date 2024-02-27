import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employesidebar',
  templateUrl: './employesidebar.component.html',
  styleUrls: ['./employesidebar.component.css']
})
export class EmployesidebarComponent implements OnInit {

  clickProfil = false;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  logout() {

    localStorage.removeItem('tokenuser');
    this.router.navigate(['/']);
  }
  seeProfil() {
    this.router.navigate(['/profil']);
  }
  toggleProfil() {
    this.clickProfil = !this.clickProfil;
  }

}
