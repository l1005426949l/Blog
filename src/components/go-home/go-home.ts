import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the GoHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'go-home',
  templateUrl: 'go-home.html'
})
/**
 * 点我回到首页
 */
export class GoHomeComponent {

  constructor(public navCtrl: NavController) { }
  /**
   * 待改进，查找有没有此页面，按情况跳转
   * @param e 
   */
  moveToHome(e) {

    if (this.navCtrl.getViews().length < 2) {
      this.navCtrl.popToRoot();
      // this.navCtrl.setRoot('HomePage');
    } else {
      this.navCtrl.popToRoot();
    }

  }
}

