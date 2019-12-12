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
import { MenuController } from '@ionic/angular';
import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-emailsettings',
  templateUrl: './emailsettings.page.html',
  styleUrls: ['./emailsettings.page.scss'],
})
export class EmailsettingsPage implements OnInit {

  constructor(private menuCtrl: MenuController, private fun: FunctionsService) { }

  ngOnInit() {
  }
  
  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(false, 'start');
  }

}
