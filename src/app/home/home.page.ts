import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { ActivatedRoute } from '@angular/router'
interface user{
  id:number
  name:string,
  email:string
  permissions:number,
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth:AuthService, private route: ActivatedRoute) { }
  page:string|null = 'permissions'
  users = [{name:'tilapio', status:'sla'}, {name:'tilapio', status:'sla'}, {name:'tilapio', status:'sla'}];
  ngOnInit() {
    this.page = this.route.snapshot.paramMap.get('page')
    
  }

}
