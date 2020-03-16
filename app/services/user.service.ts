import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
URL:string="http://clientssys-env.tmihzbe7xn.ca-central-1.elasticbeanstalk.com"
 

  constructor(private http: HttpClient) {
   
  }

  

  register(user): Observable<any>{
      return this.http.post<any>(this.URL, user)
  }

  addClient(client:Client): Observable<any>{

    client.expDate = new Date(client.expDate);
    client.expDate.setDate(client.expDate.getDate()+1);
    client.depDate = new Date(client.depDate);
    client.depDate.setDate(client.depDate.getDate()+1);
    return this.http.post<any>(this.URL+"/addclient",client);
  }

  deleteClient(id){
    return this.http.delete(this.URL+"/delete/"+id)
  }

  login(username:string, password:string): Observable<any>{

    return this.http.post<any>(this.URL+"/authenticate", {username:username, password:password})
      .pipe(
        map(data=>{
        localStorage.setItem('currentUser', data.jwt);
        

      })
      );

  }

  getToken():string{
 return localStorage.getItem('currentUser')
    
  }

  isLoggedin(){
    return localStorage.getItem('currentUser') ? true : false;
  }

  getClient(id:number): Observable<any>{

      return this.http.get(this.URL+"/findclient/"+id);
  }

  updateClient(client:Client): Observable<any>{
    return this.http.put(this.URL+"/update", client);
  }

}
