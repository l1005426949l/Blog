import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { paginationNumberModel } from '../../models/paginationNumberModel';

/**
 * Generated class for the ArticlesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articles-list',
  templateUrl: 'articles-list.html',
})
export class ArticlesListPage {

  paginationNumber: paginationNumberModel = new paginationNumberModel(5, 1);

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  /**
   * 路由传参
   */
  ionViewDidLoad() {
    console.log(JSON.stringify(this.navParams) + this.navParams.get('id'));
    ///this.activeRoute.params.subscribe(params => console.log(params["id"]));  另一种页面传参
  }


  //todo 其他跳转
  //Set the root for the current navigation stack.
  setRoot() {
    // this.navCtrl.setRoot('HomePage');
    this.navCtrl.setRoot('AboutPage');
  }

  goToRoot() {
    this.navCtrl.goToRoot({});
    //  跳转到rootPage  options参数是过度效果的参数,默认没有动画效果
  }

  popToRoot() {
    //退回到rootPage
    this.navCtrl.popToRoot()
  }

  setPages() {
    //设置页面参数
    this.navCtrl.setPages([{ page: 'AboutDetailPage', params: { 'id': 123 } }])
  }
  //todo 复杂跳转
  goDetailOrBack(id: number): void {
    if (!!this.navParams.get('from')) {
      this.navCtrl.push('DetailPage', { 'id': id })
    } else {
      //先请求后台发生关联，然后退回到之前页面
      this.navCtrl.pop().then(() => {
        this.navCtrl.setPages([{ page: 'AboutDetailPage', params: { 'id': 1, 'u_id': id } }]);
      });
      //this.navCtrl.push(this.from);//这种情况不能用push
    }
  }
  goback() {
    this.navCtrl.pop();
  }
}