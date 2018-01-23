import { Component, Input } from '@angular/core';
import { MyHeaderModel } from '../../models/httpOthreInfoModel';
import { HttpOthreInfoProvider } from '../../providers/http-othre-info/http-othre-info';
/**
 * Generated class for the MyHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-header',
  templateUrl: 'my-header.html'
})
export class MyHeaderComponent {

  myHeaderModel: MyHeaderModel;
  /**
   * 除文章内容的标题栏
   */
  constructor(private http: HttpOthreInfoProvider) { }
  ngAfterViewInit() {
    this.http.ReceivedMsg((data) => { this.myHeaderModel = data.myHeader });
  }

}
