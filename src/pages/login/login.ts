import { HomePage } from './../home/home';
import { TabsPage } from './../tabs/tabs';
import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage implements OnInit{
    public formulario: FormGroup = new FormGroup({
        'email': new FormControl(null,[ Validators.required,Validators.minLength(5),Validators.maxLength(150)]),
        'senha': new FormControl(null, [ Validators.required,Validators.minLength(6),Validators.maxLength(150)])
    });

    constructor(
        public navCtrl: NavController,
    )
    {

    }

    ngOnInit() {

    }

    efetuarLogin(): void{
        if(this.formulario.status === 'INVALID'){
            this.formulario.get('email').markAsTouched()
            this.formulario.get('senha').markAsTouched()
        }
        else {
            this.navCtrl.setRoot(HomePage);
        }
    }

}