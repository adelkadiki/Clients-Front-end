import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Client } from 'src/app/models/Client';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  client:Client= new Client();
  
  
  constructor(private route:ActivatedRoute, private service:UserService, private router:Router, private formBuilder:FormBuilder) { 
    
  }

   exp:Date 
   dep:Date

  ngOnInit() {
    

    this.route.params.subscribe(data=>{
      const id = data.id;

      this.service.getClient(id).subscribe(data=>{
       
        this.client = data 

      if(this.client.expDate!==null && this.client.depDate!==null){
      
        this.client.expDate = new Date(this.client.expDate)
        this.client.expDate.setDate(this.client.expDate.getDate()-1)
        

        this.client.depDate = new Date(this.client.depDate)
        this.client.depDate.setDate(this.client.depDate.getDate()-1)
      
      }

     
      if(this.client.expDate===null && this.client.depDate!==null){
        

        this.dep = new Date(this.client.depDate)
        this.dep.setDate(this.dep.getDate()-1)
        this.client.depDate=this.dep
        
      }

      if(this.client.expDate!==null && this.client.depDate==null){
        

        this.exp = new Date(this.client.expDate)
        this.exp.setDate(this.exp.getDate()-1)
        this.client.expDate=this.exp
        
      }
        });
      });
  }

  cancel(){
    let id = this.client.id
    this.router.navigate(['/info', id]);
  }

  update(){
          
      if(this.client.expDate!==null){
        this.client.expDate = new Date(this.client.expDate)  
        this.client.expDate.setDate(this.client.expDate.getDate()+1)
      }
        if(this.client.depDate!==null){
          this.client.depDate = new Date(this.client.depDate)
        this.client.depDate.setDate(this.client.depDate.getDate()+1)
        }
        
   
    this.service.updateClient(this.client).subscribe(data=>{
        this.router.navigate(['/info', this.client.id]);
        
    });
  }

  test(){
    console.log("fom ssubmited");
  }

}
