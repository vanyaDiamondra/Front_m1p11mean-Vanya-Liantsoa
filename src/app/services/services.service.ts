import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class ServicesService {

  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  getServices(): Promise<any[]> {
    return this.http.get<any[]>(this.baseurl + '/service').toPromise();
  }

  getServicesCategories(): Promise<any[]> {
    return this.http.get<any[]>(this.baseurl + '/service/categories').toPromise();
  }

  searchServices(nom: String): Promise<any[]> {
    return this.http.get<any[]>(this.baseurl + '/service/search?nom='+nom).toPromise();
  }

  getServicesByID(id: string | undefined | null): Promise<any[]> {
    return this.http.get<any[]>(this.baseurl + '/service/search?_id='+id).toPromise();
  }

  searchByCategories(categorieID: String): Promise<any[]> {
    return this.http.get<any[]>(this.baseurl + '/service/search?categorieID='+categorieID).toPromise();
  }

}
