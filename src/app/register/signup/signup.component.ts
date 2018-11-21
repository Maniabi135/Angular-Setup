import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
@Component({
  selector   : 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls  : ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userName;

  constructor( public router: Router, public data_service: ApiService) { }

  ngOnInit() {
    this.data_service.login_name.subscribe(data => this.userName = data);
  }

  signin() {
    this.data_service.navId(this.userName);
    this.data_service.login_name.subscribe(data => this.userName = data);
    this.router.navigate(['/account/' + this.userName]);
  }

}
