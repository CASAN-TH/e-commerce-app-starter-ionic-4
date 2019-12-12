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
import { IonSlides, MenuController } from '@ionic/angular';
import { HomeTab, DataService } from '../data.service';
import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  @ViewChild('Slides') slides: IonSlides;

  index = 0;
  segment = '';
  rewards;

  data: Array<HomeTab>;

  subtab = ['Available', 'Used'];
  sub;

  constructor(private dataService: DataService, private fun: FunctionsService, private menuCtrl: MenuController) {
    this.data = dataService.rewards_tab;
    this.segment = this.data[0].title;
    this.rewards = dataService.rewards;
    this.sub = this.subtab[0];
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

  drag() {
    // var element : any = document.getElementsByClassName('my-btn')[this.index + 1];
    document.getElementById('dag').scrollLeft = this.index * 150;
  }

  update(i) {
    this.slides.slideTo(i);
  }

  update2(i) {
    this.sub = this.subtab[i];
  }

  seg(event) {
    this.segment = event.detail.value;
  }

  segmentChanged(ev: any) {
    this.sub = ev.detail.value;
  }

}
