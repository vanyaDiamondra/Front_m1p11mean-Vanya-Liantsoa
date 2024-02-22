import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit, OnDestroy {
  notifications: any[] = [];
  eventSource: EventSource | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.eventSource = new EventSource('http://localhost:3000/notifications/stream');
    this.eventSource.onmessage = event => {
      const notification = JSON.parse(event.data);
      this.notifications.push(notification);
    };
  }

  ngOnDestroy(): void {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }

  navigateToPost(offreId: string): void {
    this.router.navigate(['/offres', offreId]);
  }
}
