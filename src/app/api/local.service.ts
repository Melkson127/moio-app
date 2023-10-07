import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { API_URL } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private  httpClient:  HttpClient, private storage: Storage, private router:Router, private auth:AuthService) { }
  token:string = ''
  newLocal(local:any){
    this.auth.getToken().then((token)=>{
      this.token = token
    })
    return this.httpClient.post(`${API_URL}/local/register`, local,{
      'headers': {
        'Content_Type': 'json',
        'Authorization': `Bearer ${this.token}`
      }
    }).subscribe(async (res)=>{
      await this.store(res);
      this.router.navigate(['home/local'])
    },(err)=>{
      console.log(err)
    })
  }
  getLocais(){
    return this.httpClient.get(`${API_URL}/local/all`, {
      'headers': {
        'Content_Type': 'json',
        'Authorization': `Bearer ${this.token}`
      }
    }).pipe(tap((res)=>{
      this.store(res)
    }))
  }
  async store(local:any){
    await this.storage.create()
    await this.storage.set('locais', local)
  }
}
