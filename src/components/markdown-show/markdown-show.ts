import { Component } from '@angular/core';
import { TransferParametersProvide } from '../../providers/transfer-parameters/transfer-parameters';
import { HttpMarkdownShowProvider } from '../../providers/http-markdown-show/http-markdown-show';
import { MessageModel } from '../../models/message-model';
import { MarkdownShowModel, ArticlesShowModel } from '../../models/MarkdownShowModel';

/**
 * Generated class for the MarkdownShowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'markdown-show',
  templateUrl: 'markdown-show.html'
})
export class MarkdownShowComponent {

  subscriber: any;
  markdownShowModel: MarkdownShowModel;
  articlesShowModel: ArticlesShowModel;
  /**
   * 获取跳转后传过来的参数，发起http请求
   * @param transferParameters 
   * @param http 
   */
  constructor(private transferParameters: TransferParametersProvide, private http: HttpMarkdownShowProvider) {
    this.subscriber = this.transferParameters.ReceivedMsg((m) => {
      this.articlesShowModel = JSON.parse(m.value);
      http.postMarkdownShowModel(Number(m.key))
        .subscribe((date) => { this.markdownShowModel = date },
          (error) => { console.error(error) });
    });
  }
  ngAfterViewInit() {
  }
  ionViewWillLeave() {
    this.transferParameters.UnSubscribe(this.subscriber);
  }
}