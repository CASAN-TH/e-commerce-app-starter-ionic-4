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
import { DataService, Address } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.page.html',
  styleUrls: ['./new-address.page.scss'],
})
export class NewAddressPage implements OnInit {

  address: Address = {
    first_name: '',
    last_name: '',
    address_line_1: '',
    address_line_2: '',
    country: 'India',
    state: '',
    city: '',
    zipcode: undefined,
    phone_number: undefined
  }

  flag;

  countries: any;

  constructor(private menuCtrl: MenuController, private activatedRoute: ActivatedRoute, private fun: FunctionsService, private dataService: DataService, private http: HttpClient) {
    this.get();
    this.flag = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
  }

  get(){
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(d=>{
      this.countries = d;
    });
  }

  update(){
    if(this.address.first_name == ''
    || this.address.last_name == ''
    || this.address.address_line_1 == ''
    || this.address.city == ''
    || this.address.zipcode == undefined
    || this.address.phone_number == undefined){
      this.fun.presentToast('Wrong Input', true, 'top', 1500);
    }
    else{
      this.dataService.current_user.address.push(this.address);
      if(this.flag){
        this.fun.navigate('home',false);
      }
      else{
        this.fun.back();
      }
    }
  }

}
