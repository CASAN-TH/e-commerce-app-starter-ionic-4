/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './data.service';
import { FunctionsService } from './functions.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  side_open = true;
  side_open1 = true;

  public appPages = [
    { title: 'Browse', url: '/home', icon: 'home' },
    { title: 'Search', url: '/search', modal: true, icon: 'search' },
    { title: 'Notifications', url: '/notification', icon: 'notifications' },
    { title: 'Shopping Cart', url: '/cart', icon: 'cart' },
    { title: 'Order History', url: '/orders', icon: 'list' },
    { title: 'Wish Cash', url: '/wishcash', icon: 'wallet' },
    { title: 'Rewards', url: '/rewards', icon: 'trophy' },
    { title: 'Apply Promo', url: '/applypromo', icon: 'megaphone' }
  ];
  public appPages1 = [
    { title: 'Customer Support', url: '/support', icon: 'people' },
    { title: 'FAQs', url: '/faqs', icon: 'help-circle' },
    { title: 'Settings', url: '/settings', icon: 'cog' }
  ];

  colors = [
    'Bronze',
    'Black',
    'Blue',
    'Clear',
    'Gold',
    'Gray',
    'Green',
    'Multi-Color',
    'Orange',
    'Pink',
    'Red',
    'Silver',
    'White',
    'Yellow',
    'Brown',
    'Purple',
    'Beige'
  ];

  menu(b){
    if(b){
      this.side_open = false;
      this.side_open1 = true;
    }
    else {
      this.side_open = false;
      this.side_open1 = false;
    }
  }

  back(){
    this.side_open = true;
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public dataService: DataService,
    public fun: FunctionsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }
}
