import { Component } from '@angular/core';
import { Adm } from '../adm/adm';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  senha: string;
  constructor(private autenticacao: AngularFireAuth, private router: Router, private mensagem: ToastController) { }

  async mostrarMensagem() {
    const message = await this.mensagem.create({
      message: 'Ocorreu um erro, tente novamente',
      duration: 2000,
      buttons: ['Ok']
    });
    await message.present()
  }

  entrar() {
    this.autenticacao.auth.signInWithEmailAndPassword(this.email, this.senha).then(
      () => { this.router.navigate(['opcoes']) }).catch((erro) => this.mostrarMensagem());

  }

}
