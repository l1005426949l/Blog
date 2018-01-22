import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { articleListUrl } from '../../assets/configs/urlConfig';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import { HttpArticlesListPageModel } from '../../models/httpArticlesListPageModel';

/*
  Generated class for the HttpArticleListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpArticleListProvider {
  private subject: Subject<HttpArticlesListPageModel> = new Subject<HttpArticlesListPageModel>();
  constructor(private http: HttpClient) {
  }
  /**
   * 发起分页列表页面请求
   * @param pIndex 要请求的分页列表页面索引
   */
  private postArticleList(pIndex: number): Observable<HttpArticlesListPageModel> {
    let params = new HttpParams();
    params.set('pIndex', String(pIndex));
    //new HttpParams({fromString: 'orderBy="$key"&limitToFirst=1'});
    return this.http.get<HttpArticlesListPageModel>(articleListUrl, { responseType: 'json', params: params });
  }
  /**
   * 发送http请求
   * @param pIndex 要请求的页码
   */
  public SendMsg(pIndex: number) {
    if (!this.subject.isStopped && !this.subject.closed)
      this.postArticleList(pIndex).subscribe((data) => {
        this.subject.next(data);
      }, (error) => { this.subject.next(error); })
  }
  /**
   * 接受http请求
   * @param handle http回来的数据
   */
  public ReceivedMsg(handle: (value: HttpArticlesListPageModel) => void): Subscriber<HttpArticlesListPageModel> {
    const sub = this.subject.subscribe(handle);
    return sub as Subscriber<HttpArticlesListPageModel>;
  }
  /**
   * 取消订阅
   * @param sub 要取消的订阅
   */
  public UnSubscribe(sub: Subscriber<HttpArticlesListPageModel>) {
    sub.unsubscribe();
  }
}
