import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { UserService } from 'src/app/services/user.service';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private service:UserService, private fb:FormBuilder, private router:Router) { }

  client:Client = new Client()
  addClientForm: FormGroup
 
  submitted = false
  
  Message:string="Add new client";
  confirm = false
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  

  add(){
    
    this.submitted=true
    
    if(this.addClientForm.invalid){

      return;
    }

     this.service.addClient(this.addClientForm.value).subscribe(data=>{

      
      
      this.Message="Client is added";
      this.addClientForm.reset();  
     this.submitted=false;
     this.router.navigate(['info',data.id]);
     
         });
    
  }


  get f(){
    return this.addClientForm.controls;
  }

  ngOnInit() {

    this.addClientForm = this.fb.group({

         owner : new FormControl('', [Validators.required]),
    domain : new FormControl(),
    expDate : new FormControl(''),
    email : new FormControl('', [Validators.required, Validators.email]),
    hostComp : new FormControl(),
    cpUrl : new FormControl(),
    cpUsername : new FormControl(),
    cpPassword : new FormControl(),
    depDate : new FormControl(''),
    notices : new FormControl()
    })
    
  }

}
