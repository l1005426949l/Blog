import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module'
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { createTranslateHttpLoader } from '../providers/i18n/i18n';
import { Network } from '@ionic-native/network';
import { TransferParametersProvide } from '../providers/transfer-parameters/transfer-parameters';
import { ArticleListProvider } from '../providers/article-list/article-list';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    // TranslateModule.forRoot({ //语言国际化
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (createTranslateHttpLoader),
    //     deps: [HttpClient]
    //   }
    // }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TransferParametersProvide,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Network,
    ArticleListProvider
  ]
})
export class AppModule { }