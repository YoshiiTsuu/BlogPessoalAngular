import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../serivce/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User;
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(
    private authService : AuthService, //Isto é uma injeção de dependecia
    private router: Router
  ) { }

  ngOnInit(){ //NgOnInit toda vez que eu abrir minha página isso define como ela vai se comportar
    window.scroll(0,0) 
  }
  confirmSenha( event: any){ //Compara as duas senhas e vê se elas são iguais
    return this.confirmarSenha = event.target.value
  }
  tipoUser(event:any){
    return this.tipoUsuario
  }
  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if (this.user.senha == this.confirmarSenha){
      this.authService.cadastar(this.user).subscribe((resp: User)=>{
        this.user = resp
        this.router.navigate(['/login'])
      }) //subscribe serve para que o objeto não seja enviado da forma json
      alert('Cadastro concluído com sucesso!')

    }
    else{
      alert('As senhas não coincidem!')
    }
  } 

}
