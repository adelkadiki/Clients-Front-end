import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from '../models/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  user: User;
  URL:string="http://clientssys-env.tmihzbe7xn.ca-central-1.elasticbeanstalk.com";
 
  headers: HttpHeaders;
  constructor(private http: HttpClient) {   }

   findAllClients(): Observable<any>{

    return this.http.get(this.URL+"/allclients");

   }

}
