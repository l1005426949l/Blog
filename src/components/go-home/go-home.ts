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
  moveToHome(e) {
    this.navCtrl.popToRoot();
  }
}

