import { Component } from '@angular/core';
import { HttpOthreInfoProvider } from '../../providers/http-othre-info/http-othre-info';

/**
 * Generated class for the LeftInformationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'left-information',
  templateUrl: 'left-information.html'
})
export class LeftInformationComponent {
  option: any;
  
  constructor(private http: HttpOthreInfoProvider) {

  }
  ngAfterViewInit() {
    this.http.ReceivedMsg((data) => { this.option = data.option });
  }
  ionViewDidEnter() { }

}
