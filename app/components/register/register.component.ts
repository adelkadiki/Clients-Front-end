import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: User = new User();
  errorMsg:string="";

  constructor(private userService:UserService, private router:Router) {  }


  register(){
      this.userService.register(this.user).subscribe(data=>{
        this.router.navigate(['/login'])
      }, err=>{
        this.errorMsg="username already exists";
      });
  }

  ngOnInit() {
  }

}
