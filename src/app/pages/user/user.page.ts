import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navigateToFeedPage(){
    this.router.navigate(['home/feed']);
  }

}
