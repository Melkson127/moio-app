import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }
  users = [{name:'tilapio', status:'sla'}, {name:'tilapio', status:'sla'}, {name:'tilapio', status:'sla'}];
  ngOnInit() {
  }

}
