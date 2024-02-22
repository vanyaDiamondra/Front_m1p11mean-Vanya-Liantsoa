import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {baseurl} from './routeconfig';

@Injectable({
  providedIn: 'root'
})


export class PreferenceService {
  constructor(private http: HttpClient, private router: Router) { }

  noterService(data: any,id:string):Observable<any> {
    console.log(data);
    return this.http.post(baseurl+'/service/ajoutprefservice/'+id, data);
  }
  noterEmp(data: any,id:string):Observable<any> {
    return this.http.post(baseurl+'/service/ajoutprefemp/'+id, data);
  }

}

