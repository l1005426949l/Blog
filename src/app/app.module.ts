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
import { HttpArticleListProvider } from '../providers/http-article-list/http-article-list';
import { HttpMarkdownShowProvider } from '../providers/http-markdown-show/http-markdown-show';
import { MarkdownModule } from 'ngx-md';
import { PaginationConversionProvider } from '../providers/pagination-conversion/pagination-conversion';
import { HttpOthreInfoProvider } from '../providers/http-othre-info/http-othre-info';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    MarkdownModule.forRoot(),
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
    HttpArticleListProvider,
    HttpMarkdownShowProvider,
    PaginationConversionProvider,
    HttpOthreInfoProvider
  ]
})
export class AppModule { }
