import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { articlesListModel } from '../../models/articlesListModel';
import { articleListUrl } from '../../assets/configs/urlConfig';

/*
  Generated class for the HttpArticleListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpArticleListProvider {

  constructor(private http: HttpClient) {
    console.log('Hello HttpArticleListProvider Provider');
  }
  /**
   * 发起分页列表页面请求
   * @param pIndex 要请求的分页列表页面索引
   */
  public postArticleList(pIndex: number): Observable<Array<articlesListModel>> {
    let params = new HttpParams();
    params.set('pIndex', String(pIndex));
    //new HttpParams({fromString: 'orderBy="$key"&limitToFirst=1'});
    return this.http.get<Array<articlesListModel>>(articleListUrl, { responseType: 'json', params: params });
  }
}
