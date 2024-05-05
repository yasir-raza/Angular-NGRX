import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  users: User[] = [];
  constructor(private srvc : ApiService){}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){
    this.srvc.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }
}
