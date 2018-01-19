import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

/*
  Generated class for the I18nProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class I18nProvider {
  constructor(public http: HttpClient) {
    console.log('Hello I18nProvider Provider');
  }

}
/**
 * 翻译
 * @param http http信息流
 */
export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
