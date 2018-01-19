import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { TranslateService } from "@ngx-translate/core";
import { Network } from "@ionic-native/network";
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;
  // private translateService: TranslateService,
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private network: Network ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.setLang();
      this.netWatch();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  /**
   *  超时
   * */
  private netWatch() {
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        console.log(this.network);
      }, 3000);
    });
  }
  /** 
   * 设置语言
   */
  // private setLang() {
  //   this.translateService.addLangs(["zh", "en"]);
  //   this.translateService.setDefaultLang("zh");
  //   let browserLang = localStorage.getItem('lang') || this.translateService.getBrowserLang();
  //   localStorage.setItem('lang', browserLang);
  //   this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  //   console.log('初始化时语言：'+(browserLang.match(/zh|en/) ? browserLang : 'zh'));
    
  // }
}
