import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

   
  clients:any[]
  popoverMessage:string="Please confirm deleting"
  
  

  constructor(private route:ActivatedRoute, private service:UserService, private router:Router) { }

  ngOnInit() {
  
  this.route.params.subscribe(data=>{
    const id = data.id;
    
    this.service.getClient(id).subscribe(data=>{
      this.clients=[data];
    });
  });
    
  }

  list(){
    this.router.navigate(['/list'])
  }

  updateClient(id){
    this.router.navigate(['/update',id])
    
  }

  deleteClient(id){
    this.service.deleteClient(id).subscribe(data=>{
      
        this.router.navigate(['/list'])
      
      
    });
  }

}
