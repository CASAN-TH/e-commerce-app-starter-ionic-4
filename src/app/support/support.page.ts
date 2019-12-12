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
import { DataService } from '../data.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  conversation = [
    { text: 'Hi user, how may I help you?', sender: 0, image: 'assets/images/sg.jpg' },
    { text: 'I need some coffee, maybe!', sender: 1, image: 'https://tanaytoshniwal.me/assets/images/icon_favo.jpg' },
    { text: 'I can\'t give you that! Sorry.', sender: 0, image: 'assets/images/sg.jpg' },
    { text: 'Umm Okay!', sender: 1, image: 'https://tanaytoshniwal.me/assets/images/icon_favo.jpg' },
    { text: 'Bye!', sender: 0, image: 'assets/images/sg.jpg' }
  ]

  input = '';

  constructor(private fun: FunctionsService, private dataService: DataService, private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  
  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');
  }

  send(){
    if(this.input!=''){
      this.conversation.push({text: this.input, sender: 1, image: 'https://tanaytoshniwal.me/assets/images/icon_favo.jpg'});
      this.input = '';
    }
  }

}
