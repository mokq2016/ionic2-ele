import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DiscoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage {
  discoverItems = [{
    title:'美食热推',
    title_img:'',
    title_des:'你的口味，我都懂得',
    typeArr:[{
      imgSrc:'dis_item1.png',
      name:'土豆片回锅肉',
      price:'18'
    },
    {
      imgSrc:'dis_item2.png',
      name:'传统番茄炒蛋配排骨',
      price:'12.34'
    },
    {
      imgSrc:'dis_item3.png',
      name:'土家酱香饼',
      price:'8'
    }
    ]
  },
  {
    title:'天天特价',
    title_img:'',
    title_des:'特价商品，一网打尽',
    typeArr:[{
      imgSrc:'dis_item4.png',
      name:'香米红豆抹茶',
      price:'23'
    },
    {
      imgSrc:'dis_item5.png',
      name:'单人豪华套餐',
      price:'22.31'
    },
    {
      imgSrc:'dis_item6.png',
      name:'套餐（鸡排一份+）',
      price:'34.6'
    }
    ]
  },{
    title:'限时好礼',
    title_img:'',
    title_des:'金币换豪礼',
    typeArr:[{
      imgSrc:'dis_item7.png',
      name:'7元饿了么红包',
      price:'7'
    },
    {
      imgSrc:'dis_item8.png',
      name:'省钱计划，送暖心。。',
      price:'22.31'
    },
    {
      imgSrc:'dis_item9.png',
      name:'阳澄湖大闸蟹礼盒',
      price:'34.6'
    }
    ]
  },{
    title:'每日精选',
    title_img:'',
    title_des:'领优惠劵 全场一元起包邮',
    typeArr:[{
      imgSrc:'dis_item10.png',
      name:'6瓶西班牙葡萄酒',
      price:'23'
    },
    {
      imgSrc:'dis_item11.png',
      name:'罗莱羽绒被',
      price:'22.31'
    },
    {
      imgSrc:'dis_item12.png',
      name:'VR虚拟现实眼镜',
      price:'34.6'
    }
    ]
  }]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoverPage');
  }

}
