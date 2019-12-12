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
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  questions;
  title;
  que = [];
  ans = [];

  constructor(private modalController: ModalController, private params: NavParams) {
    this.questions = params.get('value');
    this.title = params.get('title');
    for(let i of this.questions){
      this.que.push(Object.keys(i));
      this.ans.push(Object.values(i));
    }
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }


}
