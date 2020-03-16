import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User(); 

  public username:string="";
  public password:string="";
  
 errorMessage:string = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem("currentUser");
    if(this.userService.getToken()===token){
      this.router.navigate(['/list']);
    }else{
      localStorage.clear();
    }
     
  }

  login(){

     this.userService.login(this.username, this.password).subscribe(data =>{
      
      localStorage.setItem("username", this.username);
      this.router.navigate(['/list']);
    
   
    }, err=>{
      this.errorMessage="Username or password is incorrect"
    });

  }

  

}
