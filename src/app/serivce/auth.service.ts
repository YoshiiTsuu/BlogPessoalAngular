import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin):Observable<UserLogin> {
    return this.http.post<UserLogin>('https://yoshiblog.herokuapp.com/usuarios/logar' , userLogin)
  }
  cadastar(user:User) : Observable<User>{
    return this.http.post<User>('https://yoshiblog.herokuapp.com/usuarios/cadastrar' , user)
  }
  
}
