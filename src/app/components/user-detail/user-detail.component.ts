import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  users: Array<any> = new Array();

  constructor(private userService: UserService) { }

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
