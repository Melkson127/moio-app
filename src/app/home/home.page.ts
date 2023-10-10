import { Component, NgZone, OnInit} from '@angular/core';
import { AuthService } from '../api/auth.service';
import { ActivatedRoute, Router } from '@angular/router'
import { LocalService } from '../api/local.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

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

  constructor(private auth:AuthService, private route: ActivatedRoute, private sLocais:LocalService, private router:Router, private zone:NgZone) { }
  page:string|null = 'permissions'
  users = [{name:'tilapio', status:'sla'}, {name:'tilapio', status:'sla'}, {name:'tilapio', status:'sla'}];
  locais = [{name:''}]; 
  ngOnInit() {
    this.page = this.route.snapshot.paramMap.get('page')
    if(this.page == 'local'){
      this.sLocais.getLocais().then((request)=>{
       request.subscribe((res)=>{
        this.locais = res as []
       }, err=>this.sLocais.errorHandling(err))
      })
    }
    
  }

}
