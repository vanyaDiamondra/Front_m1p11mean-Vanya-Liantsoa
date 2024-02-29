import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managersidebar',
  templateUrl: './managersidebar.component.html',
  styleUrl: './managersidebar.component.css'
})
export class ManagersidebarComponent implements OnInit  {
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
