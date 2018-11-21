import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName;

  constructor( public router: Router, public data_service: ApiService) { }

  ngOnInit() {
    this.data_service.login_name.subscribe(data => this.userName = data);
  }

  login() {
    this.data_service.navId(this.userName);
    this.data_service.login_name.subscribe(data => this.userName = data);
    this.router.navigate(['/account/' + this.userName]);
  }

}
