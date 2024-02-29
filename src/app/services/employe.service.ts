import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseurl} from './routeconfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http: HttpClient) { }

  async rdvEmploye(): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    try {
        const result = await this.http.get<any[]>(baseurl + '/employe/rdv?token='+token).toPromise();
        if (result !== undefined) {
            return result;
        } else {
            throw new Error('Donnée non définie');
        }
      } catch (error) {
          console.error('Erreur:', error);
          throw error;
      }
  }

  async dailyTasks(date: string | undefined = undefined): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    try {
      const result = await this.http.get<any[]>(baseurl + '/employe/tasks?token='+token+"&date="+date).toPromise();
      if (result !== undefined) {
            return result;
        } else {
            throw new Error('Donnée non définie');
        }
      } catch (error) {
          console.error('Erreur:', error);
          throw error;
      }
  }

  async doneDailyTasks(date: string | undefined = undefined): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    try {
      const result = await this.http.get<any[]>(baseurl + '/employe/tasks/done?token='+token+"&date="+date).toPromise();
      if (result !== undefined) {
            return result;
        } else {
            throw new Error('Donnée non définie');
        }
      } catch (error) {
          console.error('Erreur:', error);
          throw error;
      }
  }

  async addTaskDone(_id: string): Promise<any[]>  {
    try {
      const result = await this.http.get<any[]>(baseurl + '/employe/tasks/setdone?_id='+_id).toPromise();
      if (result !== undefined) {
            return result;
        } else {
            throw new Error('Donnée non définie');
        }
      } catch (error) {
          console.error('Erreur:', error);
          throw error;
      }
  }

  async rollBackTaskDone(_id: string): Promise<any[]>  {
    try {
      const result = await this.http.get<any[]>(baseurl + '/employe/tasks/rollbackdone?_id='+_id).toPromise();
      if (result !== undefined) {
            return result;
        } else {
            throw new Error('Donnée non définie');
        }
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
  }

  async filterrdvEmploye(month: number | undefined = undefined): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    try {
      if( month == 0 ) {
        const result = await this.http.get<any[]>(baseurl + '/employe/rdv?token='+token).toPromise();
        if (result !== undefined) {
          return result;
        }
      } else{
        const result = await this.http.get<any[]>(baseurl + '/employe/rdv?token='+token+'&month='+month).toPromise();
        if (result !== undefined) {
          return result;
        }
      }
    } catch (error) {
      console.error('Erreur:', error);
      throw error;
    }
    return [];
  }
  async getEmployes(): Promise<any[]> {
    try {
      const result = await this.http.get<any>(baseurl + '/employe/list').toPromise();
      if (result !== undefined) {
          return result;
      } else {
          throw new Error('Donnée non définie');
      }
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
  }

  async searchEmployes(nom: String): Promise<any[]> {
    try {
      const result = await this.http.get<any>(baseurl + '/employe/search?nom='+nom).toPromise();
      if (result !== undefined) {
          return result;
      } else {
          throw new Error('Donnée non définie');
      }
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
  }

  updateEmployeInfo(data :any,id:string) :Observable<any> {
    return this.http.post(baseurl+'/employe/update/'+id, data);
  }
  createEmploye(data :any) :Observable<any> {
    return this.http.post(baseurl+'/employe/create', data);
  }

  getUserInfo(id:string):Promise<any> {

    return this.http.get<any>(baseurl + '/user/info?id='+id).toPromise();
  }

}
