/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */
import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../functions.service';
import { MenuController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.page.html',
  styleUrls: ['./accountsettings.page.scss'],
})
export class AccountsettingsPage implements OnInit {

  items = [
    { name: 'Country/Region', url: 'country' },
    { name: 'Update Profile', url: '' },
    { name: 'Change Email Address', url: 'changeemail' },
    { name: 'Change Password', url: 'changepassword' },
    { name: 'Deactivate Account', url: 'deactivate' }
  ];

  constructor(public fun: FunctionsService, private menuCtrl: MenuController, private alertController: AlertController, private nav: NavController) { }

  ngOnInit() {
  }
  
  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(false, 'start');
  }

  async open(i){
    if(this.items[i].url=="deactivate"){
      const alert = await this.alertController.create({
        header: 'Are you sure?',
        message: 'Do you really want to deactivate your account?',
        buttons: [
          {
            text: 'Yes',
            cssClass: 'mycolor',
            handler: (blah) => {
              this.nav.navigateRoot('/login');
            }
          }, {
            text: 'No',
            role: 'cancel',
            cssClass: 'mycolor',
            handler: () => {}
          }
        ]
      });
  
      await alert.present();
    }
    else{
      this.fun.navigate(this.items[i].url,false);
    }
  }

}
