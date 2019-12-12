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
import { DataService } from '../data.service';
import { ModalController, MenuController } from '@ionic/angular';
import { FaqPage } from '../faq/faq.page';
import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FaqsPage implements OnInit {

  faqs: any;
  questions: Array<string>;

  constructor(private fun: FunctionsService, private dataService: DataService, private modalController: ModalController, private menuCtrl: MenuController) {
    this.faqs = dataService.faqs;
    this.questions = Object.keys(this.faqs);
  }

  ngOnInit() {
  }
  
  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');
  }

  async open(i, question){
    let modal = await this.modalController.create({
      component: FaqPage,
      componentProps: { value: Object.values(this.faqs)[i], title: question }
    });
    return await modal.present();
  }

}
