import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarkdownShowModel } from '../../models/MarkdownShowModel';
import { markdownShowUrl } from '../../assets/configs/urlConfig';

/*
  Generated class for the HttpMarkdownShowProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpMarkdownShowProvider {

  constructor(private http: HttpClient) {
  }
  /**
  * 发起分页列表页面请求
  * @param articleId 要请求的具体的Markdown
  */
  public postMarkdownShowModel(articleId: number): Observable<MarkdownShowModel> {
    let params = new HttpParams();
    params.set('articleId', String(articleId));
    //new HttpParams({fromString: 'orderBy="$key"&limitToFirst=1'});
    return this.http.get<MarkdownShowModel>(markdownShowUrl, { responseType: 'json', params: params });
  }
}
