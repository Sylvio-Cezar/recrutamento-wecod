import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  users: Array<any> = new Array();

  email: any;
  user: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email');
    (async () => {
      debugger;
      const data = await this.userService.getUserByEmail(this.email);
      this.user = data;
    })();
  }

  list() {
    // this.user = this.userService.getUserByEmail(this.email.subscribe());
    // this.userService.list().subscribe(users => {
    //   this.users = users;
    // }, err => {
    //   console.log('Erro ao listar os usuários', err);
    // })
  }
}
