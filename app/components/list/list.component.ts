import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { Client } from 'src/app/models/Client';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { error } from 'util';







@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clientList: Array<Client>;
  dataSource: MatTableDataSource<Client> = new MatTableDataSource();
  displayedColumns: string[] = ['domain', 'owner', 'email', 'expDate'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  error:string=""
  
  constructor(private adminService: AdminService, private router:Router, 
    private userService:UserService) {

       
   }

   ngOnInit() {
    
        this.getClients();
        
   }


   getClients(){
      this.adminService.findAllClients().subscribe(data=>{
        this.clientList=data;
       
       this.dataSource = new MatTableDataSource(data);
       this.dataSource.sort=this.sort;
      }, err=>{
          localStorage.clear();
          this.router.navigate(['/login'])
      });
   }

   getRow(client){

    let id = client.id;
    this.router.navigate(['info',id]);
    
   }

   find(filterValue:string){

    this.dataSource.filter = filterValue.trim().toLowerCase();

   }
  

}
