import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  clickNotif = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  toggleNotif() {
    this.clickNotif = !this.clickNotif;
  }

  seeProfil() {
    this.userService.seeProfil();
  }

}
