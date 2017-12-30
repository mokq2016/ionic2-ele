import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  isFixed:boolean = false;
  location:string = "";
  slider1Arr = [{
    imgSrc:'h_0.png',
    des:'美食'
  },{
    imgSrc:'h_1.png',
    des:'甜品饮品'
  },{
    imgSrc:'h_2.png',
    des:'商店超市'
  },{
    imgSrc:'h_3.png',
    des:'预定早餐'
  },{
    imgSrc:'h_4.png',
    des:'果蔬生鲜'
  },{
    imgSrc:'h_5.png',
    des:'新店特惠'
  },{
    imgSrc:'h_6.png',
    des:'准时达'
  },{
    imgSrc:'h_7.png',
    des:'高铁订餐'
  }];
  slider2Arr = [{
    imgSrc:'h_8.png',
    des:'医药健康'
  },{
    imgSrc:'h_9.png',
    des:'浪漫鲜花'
  },{
    imgSrc:'h_10.png',
    des:'麻辣烫'
  },{
    imgSrc:'h_11.png',
    des:'汉堡'
  },{
    imgSrc:'h_12.png',
    des:'地方菜'
  },{
    imgSrc:'h_13.png',
    des:'披萨意面'
  },{
    imgSrc:'h_6.png',
    des:'准时达'
  }];
  hotArr = [
    {
      imgSrc:'hot_0.png',
      des:'热卖套餐'
    },{
      imgSrc:'hot_1.png',
      des:'霸王餐'
    },{
      imgSrc:'hot_2.png',
      des:'年货到新家'
    },{
      imgSrc:'hot_3.png',
      des:'5折优惠套餐'
    }
  ];
  qualityArr = [{
    imgSrc:'nice_0.png',
    des:'红烧肉',
    type:'1'
  },{
    imgSrc:'nice_1.png',
    des:'必胜客',
    type:'1'
  },{
    imgSrc:'nice_6.png',
    des:'冒菜',
    type:'0'
  },{
    imgSrc:'nice_7.png',
    des:'阿香米线',
    type:'1'
  }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.location = "深圳市福田区上沙村";
  }
  onScroll($event: any){
    // if($event.scrollTop>= 44){
    //   this.isFixed = true;
    // }else{
    //   this.isFixed = false;
    // }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
