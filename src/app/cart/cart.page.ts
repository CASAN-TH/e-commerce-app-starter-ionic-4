/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cart, DataService } from '../data.service';
import { FunctionsService } from '../functions.service';
import { InfomodalPage } from '../infomodal/infomodal.page';
import { ModalController, IonList, NavController, MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  @ViewChild('slidingList') slidingList: IonList;

  customAlertOptions: any = {
    header: 'Select Quantity',
    translucent: true
  };

  qty = [];
  code = '';
  show = true;
  data: Array<Cart> = [];

  constructor(
    private menuCtrl: MenuController,
    public dataService: DataService,
    public fun: FunctionsService,
    private modalController: ModalController,
    private nav: NavController,
    public alertController: AlertController) {
    this.data = dataService.cart;
    if (this.data.length === 0) { this.show = false; }
    for (let i = 1; i <= 36; i++) { this.qty.push(i); }
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(false, 'end');
  }

  async open_modal(b) {
    let modal;
    if (b) {
      modal = await this.modalController.create({
        component: InfomodalPage,
        componentProps: { value: this.dataService.terms_of_use, title: 'Terms of Use' }
      });
    } else {
      modal = await this.modalController.create({
        component: InfomodalPage,
        componentProps: { value: this.dataService.privacy_policy, title: 'Privacy Policy' }
      });
    }
    return await modal.present();
  }

  calculate(i) {
    let res = 0;
    if (i === 0) {
      for (const j of this.data) {
        if (j.product.offer) {
          res += this.fun.calculate(j.product.cost_price, j.product.discount) * j.quantity;
        } else {
          res += j.product.cost_price * j.quantity;
        }
      }
    }
    if (i === 1) {
      for (const j of this.data) {
        res += j.product.shipping;
      }
    }
    return res;
  }


  fix(a) {
    return a.toFixed(2);
  }

  add() {
    const res = this.calculate(1) + this.calculate(0);
    return res;
  }

  browse() {
    this.fun.navigate('/home', false);
  }

  async remove(j) {
    this.fun.removeConform().then(res => {
      console.log('res conform', res);
      if (res === 'ok') {
        this.slidingList.closeSlidingItems();
        this.data.splice(j, 1);
        if (this.data.length === 0) {
          this.show = !this.show;
        }
      }
    });
  }

}
