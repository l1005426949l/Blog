import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello LeftIntroductionComponent Component');
    this.text = '个人简介';
  }

}
