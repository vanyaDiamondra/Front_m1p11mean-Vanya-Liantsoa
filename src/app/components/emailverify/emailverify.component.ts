import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from '../../services/emailverify.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './emailverify.component.html'
})
export class EmailVerifyComponent implements OnInit {
  feedBack :any;
  valideUrl=false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params.id;
    const token = this.route.snapshot.params.token;

    this.confirmationService.verifyEmail(userId, token).subscribe(
      response => {
        this.feedBack =  response;
        this.valideUrl=true
      },
      error => {
        console.error('Error:', error.error);
        this.feedBack=error.error;
        //this.router.navigate(['/']);

      }

    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
