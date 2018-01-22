import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
/*
  Generated class for the ArticleListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticleListProvider {

  constructor(public http: HttpClient) {
  }
  public getPostList(searchText: string, page: number = 1): Observable<string> {
    let url = 'this.postListURL';
    let params = new HttpParams();
    if (!!searchText) {
      params.set('searchText', searchText);
      url = 'this.postListSearchURL';
      console.log(`searchText=${searchText}`);
    }
    params.set('page', String(page));

    return this.http
      .get<string>(url, { responseType: 'json', params: params })
      .pipe(
        tap(_ => console.log(`found heroes matching "${_}"`)),

        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // switchMap();
      // catchError<string,string>(e=>console.log(e))
    );
  }
}
