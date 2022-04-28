import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<any> = new Array();

  constructor(private userService:  UserService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.userService.list().subscribe(users => {
      this.users = users;
    }, err => {
      console.log('Erro ao listar os usuários', err);
    })
  }
}
