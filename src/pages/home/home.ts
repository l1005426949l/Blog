import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  moveTolist(e) {
    this.navCtrl.push('ArticlesListPage', {
      'id': 1
    })
    //   this.navCtrl.setRoot('ArticlesListPage', {
    //     animate: true,
    //     animation:'ios-transition',
    //     direction:'forward',
    //     duration:500,
    // });
  }
}
