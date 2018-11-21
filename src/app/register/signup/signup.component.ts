import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls  : ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  id = 10;
  constructor( public router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.router.navigate(['./account/{{id}}']);
  }

}
