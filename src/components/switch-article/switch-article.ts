import { Component } from '@angular/core';

/**
 * Generated class for the SwitchArticleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'switch-article',
  templateUrl: 'switch-article.html'
})
export class SwitchArticleComponent {

  text: string;

  constructor() {
    console.log('Hello SwitchArticleComponent Component');
    this.text = '上一页下一页';
  }

}
