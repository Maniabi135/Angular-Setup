import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector   : 'app-account',
  templateUrl: './account.component.html',
  styleUrls  : ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  name;
  userName = 'Angular';
  constructor( public router: Router, public data_service: ApiService, public route: ActivatedRoute) {
    this.route.params.subscribe(data => this.name = data);
  }

  ngOnInit() {
    console.log(this.name);
  }

  logout() {
    this.router.navigate(['']);
    this.data_service.navId(this.userName);
  }

}
