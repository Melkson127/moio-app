import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from  'rxjs'
import { tap } from  'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { API_URL } from 'src/environments/environment';
interface credentials{
  email:string,
  password:string
}
interface AuthResponse{
  token:string,
  expires_in:string,
  user: {
    name:string
    email:string
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  private  httpClient:  HttpClient, private storage: Storage) { 

  }
  authSubject  =  new  BehaviorSubject(false)
  // login(credentials:credentials): Observable<AuthResponse>{
  //   return this.httpClient.post(`${API_URL}/login`, credentials).pipe(
  //     tap(async (res:  AuthResponse ) => {
  //       if(res){
  //         await this.storage.create()
  //         await this.storage.set("ACCESS_TOKEN", res.token)
  //         await this.storage.set("EXPIRES_IN", res.expires_in)
  //         await this.storage.set("USER", res.user)
  //         this.authSubject.next(true)
  //       }
  //     })
  // }
}
