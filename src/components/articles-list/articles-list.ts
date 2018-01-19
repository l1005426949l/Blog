import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransferParametersProvide } from '../../providers/transfer-parameters/transfer-parameters';
import { articlesListModel, imgHeaderTitlePTime } from '../../models/articlesListModel';
import {MessageModel} from "../../models/message-model";
/**
 * Generated class for the ArticlesListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'articles-list',
  templateUrl: 'articles-list.html'
})
export class ArticlesListComponent {

  listModel: Array<articlesListModel> = new Array<articlesListModel>();
 
  constructor(private navCtrl: NavController, private transferParameters: TransferParametersProvide) {

 

    const ziArray: Array<imgHeaderTitlePTime> = new Array<imgHeaderTitlePTime>(), p: string = '巡更项目中，需要发送实时消息，以及需要任务开始提醒，于是便有机会接触到SignalR，在使用过程中，发现用SignalR实现通信非常简单，下面我思明将从三个方面分享一下： 一、SignalR是什么 Asp.net SignalR是微软为实现实时通信的一个类库。一般情况下，SignalR会使用Java', url: string = 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png';
    for (let index = 0; index < 2; index++) {
      for (let aa = 0; aa < 3; aa++) {
        ziArray.push(new imgHeaderTitlePTime(url, '.Net、SignalR', 'Asp.net SignalR 让实时通讯变得简单', p, (1512996976000 + aa + index), Number(String(index) + String(aa))));
      }
      this.listModel.push(new articlesListModel((0 - index), ziArray));
    }
    console.log(JSON.stringify(this.listModel));

  }
  /**
   * 跳转到文章详情
   * @param articleId 文章id
   * @param i 日期索引
   * @param ii 文章索引
   */
  gotoMyArticles(articleId: number, i: number, ii: number) {

    this.navCtrl.push('MyArticlesPage').then(() => {
      this.transferParameters.SendMsg(new MessageModel(String(articleId),JSON.stringify(this.listModel[i].items[ii])) );

    })


  }

 

}
