import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { othreInfoUrl } from '../../assets/configs/urlConfig';
import { Subject } from 'rxjs/Subject';
import { HttpOthreInfoModel } from '../../models/httpOthreInfoModel';
import { Subscriber } from 'rxjs/Subscriber';

/**
 * http获取，copyright-info，left-information，left-introduction，title-header
 */
@Injectable()
export class HttpOthreInfoProvider {
  private subject: Subject<HttpOthreInfoModel> = new Subject<HttpOthreInfoModel>();
  constructor(public http: HttpClient) { }
  /**
   * copyright-info，left-information，left-introduction，title-header
   * 还没有实现，存数据库里
   * @param articleIndex 不是文章详情页面值为：-1
   */
  private postOthreInfo(articleIndex: number): Observable<HttpOthreInfoModel> {
    let params = new HttpParams();
    params.set('pIndex', String(articleIndex));
    //new HttpParams({fromString: 'orderBy="$key"&limitToFirst=1'});
    return this.http.get<HttpOthreInfoModel>(othreInfoUrl, { responseType: 'json', params: params });
  }
  /**
   * 发送http请求
   * @param articleIndex 不是文章详情页面值为：-1
   */
  public SendMsg(articleIndex: number) {
    if (!this.subject.isStopped && !this.subject.closed)
      this.postOthreInfo(articleIndex).subscribe((data) => {
        this.subject.next(data);
      }, (error) => { this.subject.next(error); })
  }
  /**
   * 接受http请求
   * @param handle http回来的数据
   */
  public ReceivedMsg(handle: (value: HttpOthreInfoModel) => void): Subscriber<HttpOthreInfoModel> {
    const sub = this.subject.subscribe(handle);
    return sub as Subscriber<HttpOthreInfoModel>;
  }
  /**
   * 取消订阅
   * @param sub 要取消的订阅
   */
  public UnSubscribe(sub: Subscriber<HttpOthreInfoModel>) {
    sub.unsubscribe();
  }
}
