import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-register',
  templateUrl: './register.component.html',
  styleUrls  : ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['signup']);
  }

  login() {
    this.router.navigate(['login']);
  }
}
