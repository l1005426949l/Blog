import { Component, Output, EventEmitter } from '@angular/core';
import { PaginationNumberModel } from '../../models/paginationNumberModel';
import { HttpArticleListProvider } from '../../providers/http-article-list/http-article-list';
import { PaginationConversionProvider } from '../../providers/pagination-conversion/pagination-conversion';

/**
 * Generated class for the PaginationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pagination',
  templateUrl: 'pagination.html'
})
export class PaginationComponent {

  @Output() pageChangeEvent: EventEmitter<any> = new EventEmitter();
  pagination: PaginationNumberModel = new PaginationNumberModel();

  constructor(private http: HttpArticleListProvider, private conversion: PaginationConversionProvider) { }

  /**
   * 页码变化
   * @param e
   * @param itime
   */
  pageChanged(e,itime){
    e.stopPropagation();
    this.toPage(itime);
    this.pageChangeEvent.emit(itime);
  }
  /**
   * 当ngAfterContentInit完毕，并且组件的视图已经初始化完毕时调用。只适用于组件。
   */
  ngAfterViewInit() {
    /**
     * 第一次加载时
     */
    this.http.SendMsg(1);
    this.http.ReceivedMsg((data) => {
      this.pagination = this.conversion.Conversion(data.pagination)
     
    })
  }
  /**
   * 当组件视图每次执行变更检测时调用。只适用于组件。
   */
  ngAfterViewChecked() {
  }
  /**
   * 去哪一页
   * @param itime 页码
   */
  toPage(itime: number) {
    this.http.SendMsg(itime);
  }

  public privePage(){
  }
  public nextPage(){
  }


  /**
   * 翻页
   * @param bool t:上一页 f:下一页
   */
  previousPage(bool: boolean) {
    if (bool) {
      this.http.SendMsg(this.pagination.pindex - 1);
    } else {
      this.http.SendMsg(this.pagination.pindex + 1);
    };
  }
}
