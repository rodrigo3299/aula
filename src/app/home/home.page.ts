import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
radioSelecionada:string='';
  constructor(
    public toastController: ToastController,
    public alertController: AlertController
    ) {}

    verificarRadio(){
      var mensagem='';
      if(this.radioSelecionada=='option1'){
        mensagem='Você clicou na radio 1';
      }
     else if(this.radioSelecionada=='option2'){
        mensagem='Você clicou na radio 2';
      }
    else {
      mensagem='Você clicou na radio 3'
    }
      this.exibirToast(mensagem);
      //this.exibirAlerta();
    }
async exibirToast(mensagem:string){
const toast = await this.toastController.create({
  message: mensagem,
  duration: 2000,
  position: "bottom",
  color:"danger"
});
  toast.present();
}
async exibirAlerta(mensagem:string){
  const alert = await this.alertController.create({
    header: 'Está é uma mensagem de exemplo',
    message: mensagem,
    buttons: ['OK']
  });
    alert.present();
  }
}
