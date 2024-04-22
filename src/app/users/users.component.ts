import { Component, OnInit } from '@angular/core';
import User from '../types/User';
import { UsersService } from '../users.service';
import {MatTableModule, MatTable} from '@angular/material/table';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, MatTable],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'email', 'password'];
  dataSource = this.users;

  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
      this.dataSource = data;
    });
    
  }
  public deleteUser(id: number) {
    console.log(id);
  }
  
  constructor(private usersService: UsersService){}

}
