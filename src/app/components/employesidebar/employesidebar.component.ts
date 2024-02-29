import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employesidebar',
  templateUrl: './employesidebar.component.html',
  styleUrls: ['./employesidebar.component.css']
})
export class EmployesidebarComponent implements OnInit {

  clickProfil = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleProfil() {
    this.clickProfil = !this.clickProfil;
  }
  logout() {

    localStorage.removeItem('tokenuser');
    this.router.navigate(['/']);
  }

}
