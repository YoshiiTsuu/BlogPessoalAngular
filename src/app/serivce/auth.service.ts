import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://yoshiblog.herokuapp.com/usuarios/logar', userLogin)
  }
  cadastar(user: User): Observable<User> {
    return this.http.post<User>('https://yoshiblog.herokuapp.com/usuarios/cadastrar', user)
  }

  logado() {//Neste método estou dizendo se token for diferente de vazio, o ok é verdade!
    let ok: boolean = false
      if (environment.token != ''){
        ok = true
      }
    return ok
  }

}
