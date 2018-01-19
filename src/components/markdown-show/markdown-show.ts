import { Component } from '@angular/core';
import { TransferParametersProvide } from '../../providers/transfer-parameters/transfer-parameters';

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

  text: string;
  subscriber: any;
  constructor(private transferParameters: TransferParametersProvide) {

    
    this.subscriber = this.transferParameters.ReceivedMsg(m => this.text = m.ToString());

  }
  ionViewWillLeave() {
    this.transferParameters.UnSubscribe(this.subscriber);
  }
}
