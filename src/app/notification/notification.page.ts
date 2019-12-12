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
import { HomeTab, DataService, Notification } from '../data.service';
import { IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  @ViewChild('Slides') slides: IonSlides;
  index = 0;
  segment = '';
  notifications: Notification;

  data: Array<HomeTab> = [];

  constructor(private dataService: DataService, private menuCtrl: MenuController) {
    this.data = dataService.notifications_tab;
    this.segment = this.data[0].title;
    this.notifications = dataService.notifications;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');
  }

  async change() {
    await this.slides.getActiveIndex().then(d => this.index = d);
    this.segment = this.data[this.index].title;
    this.drag();
  }

  update(i) {
    this.slides.slideTo(i);
  }

  drag() {
    // var element : any = document.getElementsByClassName('my-btn')[this.index + 1];
    document.getElementById('dag').scrollLeft = this.index * 150;
  }

  seg(event) {
    this.segment = event.detail.value;
  }

}
