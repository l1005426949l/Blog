import { Component } from '@angular/core';
import { CopyrightInfoModule } from '../../models/copyrightInfoModule';
import { NavController } from 'ionic-angular';
import { HttpOthreInfoProvider } from '../../providers/http-othre-info/http-othre-info';
/**
 * Generated class for the CopyrightInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'copyright-info',
  templateUrl: 'copyright-info.html'
})
export class CopyrightInfoComponent {
  copyrightInfoModule: CopyrightInfoModule = new CopyrightInfoModule();

  constructor(public navCtrl: NavController, private http: HttpOthreInfoProvider) {
  }

  ngAfterViewInit() {
    this.http.ReceivedMsg((data) => { this.copyrightInfoModule.author = data.author })
    this.copyrightInfoModule.source = window.location.protocol + window.location.host;
  }
  /**
   * 去引用页
   */
  goThisPage(url: string) {
    // 跳转有问题
    window.location.href = url;
  }
}
