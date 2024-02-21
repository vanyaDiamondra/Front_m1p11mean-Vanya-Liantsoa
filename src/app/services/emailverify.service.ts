import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseurl} from './routeconfig';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private http: HttpClient) { }

  verifyEmail(userId: string, token: string) {
    return this.http.get(baseurl+`/${userId}/verify/${token}`);
  }
}
