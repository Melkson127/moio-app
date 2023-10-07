import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from  'rxjs'
import { Storage } from '@ionic/storage-angular';
import { API_URL } from 'src/environments/environment';
import { Router } from '@angular/router';
interface credentials{
  email:string,
  password:string
}
interface AuthResponse{
  access_token:string,
  expires_in:string,
  token_type:string,
  user:{
    id:number
    name:string,
    email:string
    permissions:number,
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  private  httpClient:  HttpClient, private storage: Storage, private router:Router) { 

  }
  authSubject  =  new  BehaviorSubject(false)
  login(credentials:credentials){
    return this.httpClient.post(`${API_URL}/login`, credentials).subscribe(async (res)=>{
      await this.store(res as AuthResponse);
      this.authSubject.next(true)
      this.router.navigate(['home/permissions'])
    },(err)=>{
      console.log(err)
    })
  }
  async getUser(){
    await this.storage.create()
    return  await this.storage.get('user')
  }
  async getToken(){
    await this.storage.create()
    return  await this.storage.get('access_token')
  }
  async store(res:AuthResponse){
      await this.storage.create()
      await this.storage.set("access_token", res.access_token)
      await this.storage.set("expires_in", res.expires_in)
      await this.storage.set("token_type", res.token_type)
      await this.storage.set("user", res.user)
  }
}
