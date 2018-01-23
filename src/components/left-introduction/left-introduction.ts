import { Component } from '@angular/core';
import { HttpOthreInfoProvider } from '../../providers/http-othre-info/http-othre-info';
import { LeftIntroductionModel } from '../../models/httpOthreInfoModel';

/**
 * Generated class for the LeftIntroductionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'left-introduction',
  templateUrl: 'left-introduction.html'
})
export class LeftIntroductionComponent {
  leftIntroductionModel: LeftIntroductionModel;
  constructor(private http: HttpOthreInfoProvider) { }
  ngAfterViewInit() {
    this.http.ReceivedMsg((data) => { this.leftIntroductionModel = data.leftIntroductionModel });
  }
}
