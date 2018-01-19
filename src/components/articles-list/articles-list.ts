import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransferParametersProvide } from '../../providers/transfer-parameters/transfer-parameters';
import { articlesListModel } from '../../models/articlesListModel';
import { MessageModel } from "../../models/message-model";
import { HttpArticleListProvider } from '../../providers/http-article-list/http-article-list';
/**
 * Generated class for the ArticlesListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'articles-list',
  templateUrl: 'articles-list.html'
})
export class ArticlesListComponent {

  listModel: Array<articlesListModel> = new Array<articlesListModel>();

  constructor(private navCtrl: NavController, private transferParameters: TransferParametersProvide, private http: HttpArticleListProvider) { }

  /**
   * 跳转到文章详情
   * @param articleId 文章id
   * @param i 日期索引
   * @param ii 文章索引
   */
  gotoMyArticles(articleId: number, i: number, ii: number) {
    this.navCtrl.push('MyArticlesPage').then(() => {
      this.transferParameters.SendMsg(new MessageModel(String(articleId), JSON.stringify({ 'title': this.listModel[i].items[ii].title, 'header': this.listModel[i].items[ii].header })));
    })
  }
  /**
   * 得移到分页按钮去请求，这个组件只负责订阅及渲染
   * 当ngAfterContentInit完毕，并且组件的视图已经初始化完毕时调用。只适用于组件
   */
  ngAfterViewInit() {
    this.http.postArticleList(1).subscribe((date) => { this.listModel = date }, (error) => { console.error(error) });
  }
}
