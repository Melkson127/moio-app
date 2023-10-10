import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
  async newLocal(local:any){
    this.token = await this.auth.getToken()
    return this.httpClient.post(`${API_URL}/local/register`, local,{
      'headers': {
        'Content_Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    }).subscribe((res)=>{
      this.store(res);
      this.router.navigate(['home/local'])
    },err=>this.errorHandling(err))
  }
  errorHandling(err:HttpErrorResponse){
    if(err.status == 403){
      this.router.navigate(['home/permissions'])
    }else if(err.status == 401){
      this.router.navigate(['/login'])
    }
  }
  async getLocais(){
    this.token = await this.auth.getToken()
    return this.httpClient.get(`${API_URL}/local/all`, {
      'headers': {
        'Content_Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    }).pipe(tap((res)=>{
      this.store(res)
    }))
  }
  async getStorageLocais(){
    await this.storage.create()
    return await this.storage.get('locais')
  }
  async store(local:any){
    await this.storage.create()
    await this.storage.set('locais', local)
  }
}
